import { Request, Response } from "express";
import { parseReviewsList } from "../services/reviewsListService";

const getReviewsList = async (req: Request, res: Response) => {
  try {
    const reviewsList = await parseReviewsList();

    return res.json({ results: reviewsList });
  } catch (error) {
    res.status(500).json({ message: "Error getting list of reviews" });
  }
};

export default getReviewsList;
