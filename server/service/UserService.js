import bcrypt from 'bcrypt';
import Query from './Query';
import { Users } from '../database/models';
import Response from '../Helpers/Response';
import {
  emailAlreadyTaken, registeredSuccessfully, emailProvidedNotFound,
  emailPasswordNotMatch, loginSuccessfully
} from '../constant/message';
import Authentication from '../Helpers/Authentication';

class UserService {
  static async signup(req, res) {
    const { body: input } = req;
    const query = {
      where: {
        email: input.email,
      },
    };
    const isUserExist = await Query.findOne(Users, query);
    if (isUserExist) {
      return Response.commonError(req, res, 400, emailAlreadyTaken);
    }
    const hashedPassword = bcrypt.hashSync(input.password, 10);
    const updateInfo = { ...input };
    updateInfo.password = hashedPassword;
    const token = Authentication.createToken({ email: input.email });
    updateInfo.token = token;
    await Query.create(Users, updateInfo);
    return Response.commonSuccess(req, res, 201, registeredSuccessfully, { token });
  }

  static async signin(req, res) {
    const { body: input } = req;
    const query = {
      where: {
        email: input.email,
      },
    };
    const isUserExist = await Query.findOne(Users, query);
    if (!isUserExist) {
      return Response.commonError(req, res, 400, emailProvidedNotFound);
    }
    const isPasswordMatch = bcrypt.compareSync(input.password, isUserExist.dataValues.password);
    if (!isPasswordMatch) {
      return Response.commonError(req, res, 400, emailPasswordNotMatch);
    }
    const refreshToken = Authentication.validateToken(isUserExist.dataValues.token);
    let { token } = isUserExist.dataValues;

    if (!refreshToken) {
      token = Authentication.createToken({ email: input.email });
      isUserExist.token = token;
      await isUserExist.save();
    }
    const result = {
      token,
    };
    return Response.commonSuccess(req, res, 200, loginSuccessfully, result);
  }
}

export default UserService;
