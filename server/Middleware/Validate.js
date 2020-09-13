/* eslint-disable import/prefer-default-export */
import { Joi, Segments } from 'celebrate';

export const validateSignup = {
  [Segments.BODY]: Joi.object().keys({
    firstName: Joi.string().min(3).max(30).trim()
      .required(),
    lastName: Joi.string().min(3).max(30).trim()
      .required(),
    email: Joi.string().email().required(),
    password: Joi.string().alphanum().min(6).max(20)
      .required(),
    address: Joi.string().required(),
    phoneNumber: Joi.number().required(),
  }),
};

export const validateSignin = {
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().alphanum().min(6).max(20)
      .required(),
  }),
};

export const validateCategory = {
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().min(2).max(20).required(),
    description: Joi.string().min(5).max(20).required(),
  }),
};

export const validateProductId = {
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().uuid().required(),
  }),
};
