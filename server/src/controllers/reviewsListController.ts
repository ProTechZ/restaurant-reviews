import { Request, Response } from "express";
import { parseReviewsList } from "../services/reviewsListService";

const getReviewsList = async (req: Request, res: Response) => {
  try {
    const results = await parseReviewsList();

    return res.json({ results });
  } catch (err) {
    res.status(500).json({ err, message: "Error getting list of reviews" });
  }
};

export default getReviewsList;
