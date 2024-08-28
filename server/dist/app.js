"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Set-Cookie'],
    origin: ['http://localhost:3000'],
}));
const port = process.env.PORT || 3001;
app.get('/', (req, res) => {
    console.log('hello');
    return res.send('Hello, TypeScript + Node.js + Express!');
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
