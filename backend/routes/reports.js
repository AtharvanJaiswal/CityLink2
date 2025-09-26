import express from 'express';
import {
  getAllReports,
  getReportById,
  createReport,
  updateReport,
  deleteReport,
  addComment,
  getReportsStats
} from '../controllers/reportsController.js';

const router = express.Router();

// GET /api/reports/stats - Get reports statistics
router.get('/stats', getReportsStats);

// GET /api/reports - Get all reports with filtering and pagination
router.get('/', getAllReports);

// GET /api/reports/:id - Get single report by ID
router.get('/:id', getReportById);

// POST /api/reports - Create new report
router.post('/', createReport);

// PUT /api/reports/:id - Update report
router.put('/:id', updateReport);

// DELETE /api/reports/:id - Delete report (soft delete)
router.delete('/:id', deleteReport);

// POST /api/reports/:id/comments - Add comment to report
router.post('/:id/comments', addComment);

export default router;