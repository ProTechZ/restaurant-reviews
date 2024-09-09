import { createWriteStream } from "fs";
import * as fastcsv from "fast-csv";
import { ReviewType } from "./reviewsListService";
import { join } from "path";

export const addReviewToList = (review: ReviewType) => {
  const ws = createWriteStream(join(__dirname, "../../src/data/reviews.csv"), {flags: 'a'});

  fastcsv
    .write([review], { headers: false })
    .pipe(ws)
    .on("error", (err) => {
      console.error(err);
    });
};
