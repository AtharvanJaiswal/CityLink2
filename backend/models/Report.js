import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['Roads', 'Lighting', 'Sanitation', 'Water', 'Parks', 'Traffic', 'Safety', 'Other'],
    default: 'Other'
  },
  status: {
    type: String,
    required: [true, 'Status is required'],
    enum: ['Pending', 'In Progress', 'Resolved', 'Cancelled'],
    default: 'Pending'
  },
  priority: {
    type: String,
    required: [true, 'Priority is required'],
    enum: ['Low', 'Medium', 'High', 'Critical'],
    default: 'Medium'
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    trim: true,
    maxlength: [300, 'Location cannot exceed 300 characters']
  },
  coordinates: {
    latitude: {
      type: Number,
      min: -90,
      max: 90
    },
    longitude: {
      type: Number,
      min: -180,
      max: 180
    }
  },
  reportedBy: {
    type: String,
    required: [true, 'Reporter name is required'],
    trim: true,
    maxlength: [100, 'Reporter name cannot exceed 100 characters']
  },
  reporterEmail: {
    type: String,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
  },
  reporterPhone: {
    type: String,
    trim: true,
    match: [/^\+?[\d\s\-\(\)]+$/, 'Please enter a valid phone number']
  },
  assignedTo: {
    type: String,
    required: [true, 'Assignment is required'],
    enum: ['Public Works', 'Electrical Dept', 'Sanitation Dept', 'Water Dept', 'Parks Dept', 'Traffic Dept', 'Safety Dept'],
    default: 'Public Works'
  },
  assignedDate: {
    type: Date,
    default: Date.now
  },
  resolvedDate: {
    type: Date
  },
  images: [{
    filename: String,
    originalname: String,
    path: String,
    size: Number,
    mimetype: String,
    uploadDate: {
      type: Date,
      default: Date.now
    }
  }],
  comments: [{
    text: {
      type: String,
      required: true,
      maxlength: [500, 'Comment cannot exceed 500 characters']
    },
    author: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for formatted report ID
reportSchema.virtual('reportId').get(function() {
  return `#${this._id.toString().slice(-6).toUpperCase()}`;
});

// Virtual for days since reported
reportSchema.virtual('daysSinceReported').get(function() {
  const now = new Date();
  const diffTime = Math.abs(now - this.createdAt);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
});

// Index for better search performance
reportSchema.index({ title: 'text', description: 'text', location: 'text' });
reportSchema.index({ status: 1, priority: 1, category: 1 });
reportSchema.index({ createdAt: -1 });

// Pre-save middleware to set resolved date
reportSchema.pre('save', function(next) {
  if (this.isModified('status') && this.status === 'Resolved' && !this.resolvedDate) {
    this.resolvedDate = new Date();
  }
  next();
});

const Report = mongoose.model('Report', reportSchema);

export default Report;