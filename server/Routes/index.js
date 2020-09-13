import { Router } from 'express';
import { celebrate } from 'celebrate';
import UserController from '../Controllers/UserController';
import { validateSignup, validateSignin } from '../Middleware/Validate';
import ProductController from '../Controllers/ProductController';
import CategoryController from '../Controllers/CategoryController';

const router = Router();

router.post(
  '/signup',
  celebrate(validateSignup),
  UserController.signup,
);

router.post(
  '/signin',
  celebrate(validateSignin),
  UserController.signin,
);

export default router;
