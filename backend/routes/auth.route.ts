import express from 'express'
import { authController } from '../controllers/auth.controller';

const router = express.Router();

router.post('/sign-up',authController.signup)
router.post('/login',)
router.post('/login',)
router.post('/login',)


export default router;