import * as Joi from 'joi';

const signUp = {
  businessName: Joi
    .string()
    .min(2)
    .max(30)
    .required(),
  email: Joi
    .string()
    .email()
    .required(),
  password: Joi
    .string()
    .min(4)
    .max(30)
    .required(),
};

const signIn = {
  email: Joi
    .string()
    .email()
    .required(),
  password: Joi
    .string()
    .required(),
};

export const authSchemas = {
  signUp,
  signIn,
};
