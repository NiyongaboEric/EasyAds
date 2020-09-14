/* eslint-disable import/prefer-default-export */
import { Joi } from 'celebrate';
import multer from 'multer';
import Response from '../Helpers/Response';
import directory from '../Helpers/files/create.folder';
import { newProductInvalid } from '../constant/message';

const schemaImage = Joi.object({
  image: Joi.object().required(),
  title: Joi.string().min(3).max(30).trim()
    .required(),
  price: Joi.string().required(),
  categoryId: Joi.string().uuid().required(),
  description: Joi.string().min(4).required(),
  status: Joi.string().min(4).max(30).trim()
    .valid('sold', 'available'),
});

export const postImageItemValidate = (req, res, next) => {
  const { file, body } = req;
  const { error } = schemaImage.validate({
    image: file,
    title: body.title,
    price: body.price,
    categoryId: body.categoryId,
    description: body.description,
    status: body.status,
  });

  if (error) {
    Response.commonError(req, res, 400, newProductInvalid, error.details);
  }
  next();
};

export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, directory());
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage });
