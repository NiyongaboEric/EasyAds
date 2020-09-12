import UserService from '../service/UserService';
import Response from '../Helpers/Response';
import { registrationFailed } from '../constant/message';

class UserController {
  static async signup(req, res) {
    try {
      const result = await UserService.signup(req, res);
      return result;
    } catch (err) {
      Response.commonError(req, res, 500, registrationFailed, err);
    }
  }
}

export default UserController;
