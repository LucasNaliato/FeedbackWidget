"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const SubmitFeedbackService_1 = require("./services/SubmitFeedbackService");
const PrismaFeedbacksRepository_1 = require("./repositories/prisma/PrismaFeedbacksRepository");
const NodemailerMailAdapter_1 = require("./adapters/nodemailer/NodemailerMailAdapter");
exports.routes = express_1.default.Router();
exports.routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository_1.PrismaFeedbacksRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter_1.NodemailerMailAdapter();
    const submitFeedbackService = new SubmitFeedbackService_1.SubmitFeedbackService(prismaFeedbacksRepository, nodemailerMailAdapter);
    await submitFeedbackService.execute({
        type,
        comment,
        screenshot
    });
    return res.status(201).send();
});
