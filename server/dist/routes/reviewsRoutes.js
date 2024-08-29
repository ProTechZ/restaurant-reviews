"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reviewsListController_1 = require("../controllers/reviewsListController");
const router = express_1.default.Router();
// POST route to analyze sentiment
router.get('/reviews-list', reviewsListController_1.getReviewsList);
exports.default = router;
