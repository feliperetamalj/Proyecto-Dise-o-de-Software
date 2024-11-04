import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../../lib/mongodb';
import User from '../../../../models/User';
import * as bcrypt from 'bcryptjs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('Received request to /api/auth/password/register');
  await dbConnect();

  const { email, password } = req.body;
  if (!email || !password) {
    console.error('Email and password are required');
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    console.error('User already exists');
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ email, password: hashedPassword });

  try {
    await newUser.save();
    console.log('User registered successfully');
    return res.status(201).json({ message: 'Signup successful!' });
  } catch (error) {
    console.error('Error saving user:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}