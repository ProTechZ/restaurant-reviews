import { createReadStream } from "fs";
import { join } from "path";
import { parse } from "fast-csv";

type ReviewType = {
  review: string;
  liked: number;
};

export const parseReviewsList = (): Promise<ReviewType[]> => {
  return new Promise((resolve, reject) => {
    const results: ReviewType[] = [];

    createReadStream(join(__dirname, "../../src/data/reviews.csv"))
      .pipe(parse({ headers: true }))
      .on("data", (row) => {
        results.push(row);
      })
      .on("end", () => {
        resolve(results);
      })
      .on("error", (err) => {
        console.error(err);
        reject(err);
      });
  });
};
