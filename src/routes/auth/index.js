import { Router } from 'express';
import AuthController from '../../controllers/auth/AuthController.js';

const router = Router();

const controller = new AuthController();

router.post('/register', controller.register);
router.post('/login', controller.login);

export default router;
