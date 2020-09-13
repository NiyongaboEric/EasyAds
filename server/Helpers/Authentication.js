import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Response from './Response';
import {
  authenticationFailed,
  authenticationRequired,
  authorizedTokenWrong,
  tokenInfoWrong,
} from '../constant/message';
import Query from '../service/Query';
import { Users } from '../database/models';

dotenv.config();

const { SECRET_KEY } = process.env;

class Authentication {
  static createToken(data) {
    const token = jwt.sign(data, SECRET_KEY, { expiresIn: '1w' });
    return token;
  }

  static validateToken(token) {
    try {
      const isVerified = jwt.verify(token, SECRET_KEY);
      return isVerified;
    } catch (error) {
      return false;
    }
  }

  static async authenticateUser(req, res, next) {
    try {
      const incomingToken = req.headers.authorization.split(' ')[1];
      if (!incomingToken) {
        Response.commonError(req, res, 401, authenticationRequired);
      }
      const isValidToken = Authentication.validateToken(incomingToken);
      if (!isValidToken) {
        Response.commonError(req, res, 401, authorizedTokenWrong);
      }
      const query = {
        where: {
          email: isValidToken.email,
        },
      };
      const isUserExist = await Query.findOne(Users, query);
      if (!isUserExist) {
        Response.commonError(req, res, 401, tokenInfoWrong);
      }
      req.authUser = isUserExist.dataValues;
      next();
    } catch (error) {
      Response.commonError(req, res, 500, authenticationFailed);
    }
  }
}

export default Authentication;
