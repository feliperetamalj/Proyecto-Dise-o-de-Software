import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../../lib/mongodb';
import User from '../../../../models/User';
import * as bcrypt from 'bcryptjs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('Received request to /api/auth/login');
  await dbConnect();

  const { email, password } = req.body;
  if (!email || !password) {
    console.error('Email and password are required');
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const user = await User.findOne({ email });
  if (!user) {
    console.error('Invalid credentials');
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const isValidPassword = bcrypt.compareSync(password, user.password);
  if (!isValidPassword) {
    console.error('Invalid credentials');
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  console.log('Login successful');
  return res.status(200).json({ message: 'Login successful' });
}