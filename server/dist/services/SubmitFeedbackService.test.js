"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SubmitFeedbackService_1 = require("./SubmitFeedbackService");
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();
describe('Submit feedback', () => {
    const submitFeedback = new SubmitFeedbackService_1.SubmitFeedbackService({ create: createFeedbackSpy }, { sendMail: sendMailSpy });
    it('should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64, test'
        })).resolves.not.toThrow();
        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });
    it('should not be able to submit feedback without type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64, test'
        })).rejects.toThrow();
    });
    it('should not be able to submit feedback without comment', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64, test'
        })).rejects.toThrow();
    });
    it('should not be able to submit feedback with an invalid screenshot', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'test.jpg'
        })).rejects.toThrow();
    });
});
