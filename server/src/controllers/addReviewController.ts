import { Request, Response } from "express";
import { addReviewToList } from "../services/addReviewService";

const addReview = async (req: Request, res: Response) => {
  try {
    const { review } = req.body;

    return res.json({ results: "sucess" });
  } catch (error) {
    res.status(500).json({ message: "Error adding the review" });
  }
};

export default addReview;
