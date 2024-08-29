import express from 'express';
import getReviewsList from '../controllers/reviewsListController';

const router = express.Router();

router.get('/list', getReviewsList);

export default router;