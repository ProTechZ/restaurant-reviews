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
const reviewsListService_1 = require("../services/reviewsListService");
const getReviewsList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield (0, reviewsListService_1.parseReviewsList)();
        return res.json({ results });
    }
    catch (err) {
        res.status(500).json({ err, message: "Error getting list of reviews" });
    }
});
exports.default = getReviewsList;
