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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reviewsListService_1 = __importDefault(require("../services/reviewsListService"));
const getReviewsList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { review } = req.body;
    try {
        const sentiment = yield (0, reviewsListService_1.default)(review);
        res.json({ sentiment });
    }
    catch (error) {
        res.status(500).json({ message: 'Error analyzing sentiment' });
    }
});
exports.default = getReviewsList;