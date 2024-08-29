import { Request, Response } from 'express';
import parseReviewsList from '../services/reviewsListService';

const getReviewsList = async (req: Request, res: Response) => {
  const { review } = req.body;
  try {
    const sentiment = await parseReviewsList(review);
    res.json({ sentiment });
  } catch (error) {
    res.status(500).json({ message: 'Error analyzing sentiment' });
  }
};

export default getReviewsList