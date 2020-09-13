import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const { SECRET_KEY } = process.env;

class Authentication {
  static createToken(data) {
    const token = jwt.sign(data, SECRET_KEY, { expiresIn: '1w' });
    return token;
  }
}

export default Authentication;
