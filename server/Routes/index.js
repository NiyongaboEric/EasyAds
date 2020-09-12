import { Router } from 'express';
import UserController from '../Controllers/UserController';
import ProductController from '../Controllers/ProductController';
import CategoryController from '../Controllers/CategoryController';

const router = Router();

router.post('/signup', UserController.signup);

export default router;
