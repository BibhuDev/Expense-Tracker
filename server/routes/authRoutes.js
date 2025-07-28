//idhar auth.js mein likha hua logic ka routing hoga

import express from 'express';
import { register, login } from '../controllers/auth.js';
import auth from '../middleware/middleAuth.js';

const router = express.Router();

router.post('/register', auth, register);
router.post('/login', auth, login);

export default router;