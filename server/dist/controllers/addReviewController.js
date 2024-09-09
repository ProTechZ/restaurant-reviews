"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const addReviewService_1 = require("../services/addReviewService");
const addReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { review } = req.body;
        // hardcoding the liked for now, will use nlp to figure if the review is postive/negative later
        const reviewObj = { review, liked: 1 };
        (0, addReviewService_1.addReviewToList)(reviewObj);
        return res.json({ results: "Successfully added review." });
    }
    catch (error) {
        res.status(500).json({ message: "Error adding the review" });
    }
});
exports.default = addReview;
