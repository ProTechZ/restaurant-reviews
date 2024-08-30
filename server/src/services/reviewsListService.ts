import * as fs from "fs";
import * as path from "path";
import { CastingContext, parse } from "csv-parse";

type ReviewsList = {
  review: string;
  liked: number;
};

const likedToInt = (columnValue: string, context: CastingContext) => {
  if (context.column === "Liked") {
    return parseInt(columnValue);
  }
  return columnValue;
};
 
const parseReviewsList = () => {
  const csvFilePath = path.join(__dirname, "/../../src/data/reviews.csv");
  const headers = ["review", "liked"];

  const fileContent = fs.readFileSync(csvFilePath, { encoding: "utf-8" });

  return new Promise((resolve, reject) => {
    parse(
      fileContent,
      {
        delimiter: ",",
        columns: headers,
        fromLine: 2,
        cast: likedToInt,
      },
      (error, result: ReviewsList[]) => {
        if (error) {
          console.error(error);
          reject(error); 
        } else {
          resolve(result); 
        }
      }
    );
  });
};

export default parseReviewsList;
