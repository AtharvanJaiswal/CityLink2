import Joi from 'joi';

export const createReportValidation = Joi.object({
  title: Joi.string()
    .trim()
    .min(3)
    .max(200)
    .required()
    .messages({
      'string.empty': 'Title is required',
      'string.min': 'Title must be at least 3 characters long',
      'string.max': 'Title cannot exceed 200 characters'
    }),
  
  description: Joi.string()
    .trim()
    .min(10)
    .max(1000)
    .required()
    .messages({
      'string.empty': 'Description is required',
      'string.min': 'Description must be at least 10 characters long',
      'string.max': 'Description cannot exceed 1000 characters'
    }),
  
  category: Joi.string()
    .valid('Roads', 'Lighting', 'Sanitation', 'Water', 'Parks', 'Traffic', 'Safety', 'Other')
    .required()
    .messages({
      'any.only': 'Category must be one of: Roads, Lighting, Sanitation, Water, Parks, Traffic, Safety, Other'
    }),
  
  priority: Joi.string()
    .valid('Low', 'Medium', 'High', 'Critical')
    .default('Medium')
    .messages({
      'any.only': 'Priority must be one of: Low, Medium, High, Critical'
    }),
  
  location: Joi.string()
    .trim()
    .min(5)
    .max(300)
    .required()
    .messages({
      'string.empty': 'Location is required',
      'string.min': 'Location must be at least 5 characters long',
      'string.max': 'Location cannot exceed 300 characters'
    }),
  
  coordinates: Joi.object({
    latitude: Joi.number().min(-90).max(90),
    longitude: Joi.number().min(-180).max(180)
  }).optional(),
  
  reportedBy: Joi.string()
    .trim()
    .min(2)
    .max(100)
    .required()
    .messages({
      'string.empty': 'Reporter name is required',
      'string.min': 'Reporter name must be at least 2 characters long',
      'string.max': 'Reporter name cannot exceed 100 characters'
    }),
  
  reporterEmail: Joi.string()
    .email()
    .trim()
    .lowercase()
    .optional()
    .allow('')
    .messages({
      'string.email': 'Please enter a valid email address'
    }),
  
  reporterPhone: Joi.string()
    .trim()
    .pattern(/^\+?[\d\s\-\(\)]+$/)
    .optional()
    .allow('')
    .messages({
      'string.pattern.base': 'Please enter a valid phone number'
    }),
  
  assignedTo: Joi.string()
    .valid('Public Works', 'Electrical Dept', 'Sanitation Dept', 'Water Dept', 'Parks Dept', 'Traffic Dept', 'Safety Dept')
    .default('Public Works')
    .messages({
      'any.only': 'Assignment must be one of the valid departments'
    })
});

export const updateReportValidation = Joi.object({
  title: Joi.string()
    .trim()
    .min(3)
    .max(200)
    .messages({
      'string.min': 'Title must be at least 3 characters long',
      'string.max': 'Title cannot exceed 200 characters'
    }),
  
  description: Joi.string()
    .trim()
    .min(10)
    .max(1000)
    .messages({
      'string.min': 'Description must be at least 10 characters long',
      'string.max': 'Description cannot exceed 1000 characters'
    }),
  
  category: Joi.string()
    .valid('Roads', 'Lighting', 'Sanitation', 'Water', 'Parks', 'Traffic', 'Safety', 'Other')
    .messages({
      'any.only': 'Category must be one of: Roads, Lighting, Sanitation, Water, Parks, Traffic, Safety, Other'
    }),
  
  status: Joi.string()
    .valid('Pending', 'In Progress', 'Resolved', 'Cancelled')
    .messages({
      'any.only': 'Status must be one of: Pending, In Progress, Resolved, Cancelled'
    }),
  
  priority: Joi.string()
    .valid('Low', 'Medium', 'High', 'Critical')
    .messages({
      'any.only': 'Priority must be one of: Low, Medium, High, Critical'
    }),
  
  location: Joi.string()
    .trim()
    .min(5)
    .max(300)
    .messages({
      'string.min': 'Location must be at least 5 characters long',
      'string.max': 'Location cannot exceed 300 characters'
    }),
  
  coordinates: Joi.object({
    latitude: Joi.number().min(-90).max(90),
    longitude: Joi.number().min(-180).max(180)
  }).optional(),
  
  assignedTo: Joi.string()
    .valid('Public Works', 'Electrical Dept', 'Sanitation Dept', 'Water Dept', 'Parks Dept', 'Traffic Dept', 'Safety Dept')
    .messages({
      'any.only': 'Assignment must be one of the valid departments'
    }),
  
  reporterEmail: Joi.string()
    .email()
    .trim()
    .lowercase()
    .optional()
    .allow('')
    .messages({
      'string.email': 'Please enter a valid email address'
    }),
  
  reporterPhone: Joi.string()
    .trim()
    .pattern(/^\+?[\d\s\-\(\)]+$/)
    .optional()
    .allow('')
    .messages({
      'string.pattern.base': 'Please enter a valid phone number'
    })
});

export const addCommentValidation = Joi.object({
  text: Joi.string()
    .trim()
    .min(1)
    .max(500)
    .required()
    .messages({
      'string.empty': 'Comment text is required',
      'string.max': 'Comment cannot exceed 500 characters'
    }),
  
  author: Joi.string()
    .trim()
    .min(2)
    .max(100)
    .required()
    .messages({
      'string.empty': 'Author name is required',
      'string.min': 'Author name must be at least 2 characters long',
      'string.max': 'Author name cannot exceed 100 characters'
    })
});