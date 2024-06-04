import jwt from 'jsonwebtoken';
import config from '../config/config';

interface JwtPayload {
  id: string;
}

export const generateToken = (id: string): string => {
  return jwt.sign({ id }, config.JWT_SECRET, { expiresIn: '1h' });
};

export const verifyToken = (token: string): JwtPayload => {
  return jwt.verify(token, config.JWT_SECRET) as JwtPayload;
};
