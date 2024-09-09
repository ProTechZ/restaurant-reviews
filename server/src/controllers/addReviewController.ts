import { Request, Response } from "express";
import { addReviewToList } from "../services/addReviewService";

const addReview = async (req: Request, res: Response) => {
  try {
    const { review } = req.body;

    // hardcoding the liked for now, will use nlp to figure if the review is postive/negative later
    const reviewObj = {review, liked: 1}

    addReviewToList(reviewObj)

    return res.json({ results: "Successfully added review." });
  } catch (error) {
    res.status(500).json({ message: "Error adding the review" });
  }
};

export default addReview;
