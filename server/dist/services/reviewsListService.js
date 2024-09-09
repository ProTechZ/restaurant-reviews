"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseReviewsList = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const fast_csv_1 = require("fast-csv");
const parseReviewsList = () => {
    return new Promise((resolve, reject) => {
        const results = [];
        (0, fs_1.createReadStream)((0, path_1.join)(__dirname, "../../src/data/reviews.csv"))
            .pipe((0, fast_csv_1.parse)({ headers: true }))
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
exports.parseReviewsList = parseReviewsList;
