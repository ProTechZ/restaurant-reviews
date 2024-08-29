import express from 'express';
import getReviewsList from '../controllers/reviewsListController';

const router = express.Router();

// POST route to analyze sentiment
router.get('/reviews-list', getReviewsList);

export default router;