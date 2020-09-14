import { Router } from 'express';
import { celebrate } from 'celebrate';
import UserController from '../Controllers/UserController';
import {
  validateSignup,
  validateSignin,
  validateCategory,
  validateProductId,
  validateMarkProduct,
} from '../Middleware/Validate';
import ProductController from '../Controllers/ProductController';
import { postImageItemValidate, upload } from '../Middleware/image';
import Authentication from '../Helpers/Authentication';
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

router.post(
  '/add-category',
  Authentication.authenticateUser,
  celebrate(validateCategory),
  CategoryController.addCategory,
);

router.get(
  '/category',
  Authentication.authenticateUser,
  CategoryController.getCategory,
);

router.post(
  '/add-product',
  Authentication.authenticateUser,
  upload.single('image'),
  postImageItemValidate,
  ProductController.addProduct,
);

router.get(
  '/product',
  Authentication.authenticateUser,
  ProductController.getProduct,
);

router.get(
  '/product/:id',
  Authentication.authenticateUser,
  celebrate(validateProductId),
  ProductController.getSpecificProduct,
);

router.get(
  '/owner-product',
  Authentication.authenticateUser,
  ProductController.getOwnersProduct,
);

router.patch(
  '/owner-product/:id',
  Authentication.authenticateUser,
  celebrate(validateMarkProduct),
  ProductController.markProduct,
);

export default router;
