import { Request, Response } from "express";
import { addReviewToList } from "../services/addReviewService";
import { analyseReview } from "../services/reviewAnalysisService";

const addReview = async (req: Request, res: Response) => {
  try {
    const { review } = req.body;

    const { liked } = await analyseReview(review);

    const reviewObj = { review, liked: liked };

    addReviewToList(reviewObj);

    return res.json({ results: "Successfully added review.", liked });
  } catch (error) {
    res.status(500).json({ message: "Error adding the review" });
  }
};

export default addReview;
