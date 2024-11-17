'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { RegistrationRequest } from '@/app/component/ApiRequest';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    full_name: '',
    role: 'trainee', // Default role
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, confirmPassword, full_name, role } = formData;
    console.log('Data being sent to the server:', formData);

    // Set loading state
    setLoading(true);
    setError(null); // Clear previous errors

    try {
      const res = await RegistrationRequest(email, password, full_name, confirmPassword, role);

      if (!res.ok) {
        const message = res.error?.message || 'Registration failed';
        toast.error("Email already exist")
        setError(message);
        setLoading(false); // Stop the loader
        return;
      }

      // Success: Show success toast and reset form
      toast.success('Registration successful!');
      setFormData({ email: '', password: '', confirmPassword: '', full_name: '', role: '' });

      // Redirect to home page
      
      router.push('/');
    } catch (err) {
      console.error('Registration error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      // Stop the loader regardless of success or failure
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-br from-yellow-600 via-amber-500 to-transparent blur-3xl"
      ></motion.div>

      {/* Glowing Circles */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1.2 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute top-1/4 left-1/4 h-64 w-64 bg-amber-400 rounded-full blur-2xl opacity-20"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1.5 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-1/3 right-1/3 h-48 w-48 bg-yellow-400 rounded-full blur-2xl opacity-20"
      ></motion.div>

      {/* Registration Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="bg-opacity-50 bg-black border border-amber-500 p-8 shadow-lg rounded-xl w-full max-w-md relative z-10"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Create Your Account
        </h2>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-red-500 text-center"
          >
            <p>{error}</p>
          </motion.div>
        )}
      
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <label htmlFor="full_name" className="block font-medium text-amber-500">
              Full Name
            </label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-amber-500 bg-black text-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Enter your full name"
              required
            />
          </motion.div>
       
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <label htmlFor="email" className="block font-medium text-amber-500">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-amber-500 bg-black text-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Enter your email"
              required
            />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <label htmlFor="password" className="block font-medium text-amber-500 mt-4">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-amber-500 bg-black text-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Enter your password"
              required
            />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <label
              htmlFor="confirmPassword"
              className="block font-medium text-amber-500 mt-4"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword" // Ensure this matches your state
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-amber-500 bg-black text-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Confirm password"
              required
            />
          </motion.div>



          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <label htmlFor="role" className="block font-medium text-amber-500">
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-amber-500 bg-black text-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="trainer">Trainer</option>
              <option value="trainee">Trainee</option>
            </select>
          </motion.div>
          <motion.button
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            type="submit"
            className="w-full bg-amber-500 text-black font-bold py-2 px-4 rounded-md hover:bg-yellow-400 transition-colors"
          >
            Register
          </motion.button>
        </form>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-yellow-300 text-sm text-center"
        >
          Already have an account?{' '}
          <a href="/user/login" className="text-amber-500 hover:underline">
            Login
          </a>
        </motion.p>
      </motion.div>
      <ToastContainer position='bottom-center' />

    </div>
  );
};

export default Page;
