//idhar auth.js mein likha hua logic ka routing hoga

import express from 'express';
import { register, login } from '../controllers/authController.js';
import auth from '../middleware/middleAuth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

export default router;