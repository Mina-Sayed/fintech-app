// user.service.ts

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.model';
import config from '../config/config';

/**
 * Registers a new user.
 * @param {string} username - The username of the user.
 * @param {string} email - The email of the user.
 * @param {string} password - The password of the user.
 * @returns {Promise<string>} - The ID of the newly registered user as a string.
 */
export const registerUser = async (username: string, email: string, password: string): Promise<string> => {
    // Hash password
    const hashedPassword: string = await bcrypt.hash(password, 10);
    // Create new user
    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    });
    await newUser.save();
    return (newUser._id as string).toString(); // Return the user ID as a string
};

/**
 * Logs in a user.
 * @param {string} email - The email of the user.
 * @param {string} password - The password of the user.
 * @returns {Promise<string>} - The JWT token for the logged-in user.
 * @throws {Error} - If the user is not found or the password is invalid.
 */
export const loginUser = async (email: string, password: string): Promise<string> => {
  // Find user by email
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User not found');
  }
  // Compare passwords
  const isPasswordValid: boolean = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }
  // Generate JWT token
  const token: string = jwt.sign({ id: user._id }, config.JWT_SECRET, { expiresIn: '1h' });
  return token;
};
