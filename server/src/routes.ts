import express from 'express';
import { SubmitFeedbackService } from './services/SubmitFeedbackService';
import { PrismaFeedbacksRepository } from './repositories/prisma/PrismaFeedbacksRepository';
import { NodemailerMailAdapter } from './adapters/nodemailer/NodemailerMailAdapter';

export const routes = express.Router()
  
routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter()

    const submitFeedbackService = new SubmitFeedbackService(
        prismaFeedbacksRepository,
        nodemailerMailAdapter
    )

    await submitFeedbackService.execute({
        type,
        comment,
        screenshot
    })

    return res.status(201).send()
})