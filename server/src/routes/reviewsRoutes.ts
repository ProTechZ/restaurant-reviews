import express from 'express';
import getReviewsList from '../controllers/reviewsListController';
import addReview from '../controllers/addReviewController';

const router = express.Router();

router.get('/list', getReviewsList);
router.post('/add', addReview);

export default router;