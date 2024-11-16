'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-between bg-black relative overflow-hidden">
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

        {/* Navigation Bar */}
        <nav className="w-full px-6 py-4 flex items-center justify-between z-10">
          <h1 className="text-2xl font-bold text-amber-500">
            GymPulse<span className="text-yellow-300">.io</span>
          </h1>
          <div className="space-x-4">
            <Link
              href="/user/login"
              className="text-yellow-300 hover:text-amber-500 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/user/registration"
              className="text-yellow-300 hover:text-amber-500 transition-colors"
            >
              Register
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center text-center space-y-6 z-10"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-amber-500">
            Welcome to GymPulse.io
          </h2>
          <p className="text-lg md:text-xl text-yellow-300 max-w-2xl">
            Your journey to fitness starts here! Whether you're a trainee looking
            to achieve your goals or a trainer helping others transform their
            lives, we’ve got you covered. Join our community today!
          </p>
          <div className="flex space-x-6">
            <Link
              href="/auth/login"
              className="bg-amber-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-md shadow-lg transition-transform transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              href="/auth/register"
              className="bg-yellow-400 hover:bg-amber-500 text-black font-bold py-3 px-6 rounded-md shadow-lg transition-transform transform hover:scale-105"
            >
              Join Now
            </Link>
          </div>
        </motion.div>

        {/* Services Section */}
        <div className="w-full py-16 bg-black text-center text-yellow-300">
          <h3 className="text-3xl font-bold mb-8">Our Services</h3>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16">
            <div className="max-w-xs bg-amber-500 p-6 rounded-xl shadow-lg text-black">
              <h4 className="text-2xl font-bold mb-4">Personal Training</h4>
              <p>
                Work one-on-one with a professional trainer to achieve your fitness
                goals faster. Tailored training plans and personalized support.
              </p>
            </div>
            <div className="max-w-xs bg-amber-500 p-6 rounded-xl shadow-lg text-black">
              <h4 className="text-2xl font-bold mb-4">Group Classes</h4>
              <p>
                Join our group classes for a fun and motivating workout. Yoga, Zumba,
                and more—find the class that fits your goals.
              </p>
            </div>
            <div className="max-w-xs bg-amber-500 p-6 rounded-xl shadow-lg text-black">
              <h4 className="text-2xl font-bold mb-4">Nutrition Coaching</h4>
              <p>
                Fuel your workouts with the right nutrition. Our experts provide
                customized meal plans to enhance your results.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="w-full py-16 bg-gray-800 text-center text-yellow-300">
          <h3 className="text-3xl font-bold mb-8">What Our Clients Say</h3>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16">
            <div className="max-w-xs bg-amber-500 p-6 rounded-xl shadow-lg text-black">
              <p>
                "GymPulse has transformed my fitness journey. The personalized
                training and support have been invaluable!"
              </p>
              <h5 className="font-bold mt-4">John Doe</h5>
              <p>Fitness Enthusiast</p>
            </div>
            <div className="max-w-xs bg-amber-500 p-6 rounded-xl shadow-lg text-black">
              <p>
                "The group classes are so much fun! I love the energy and the community
                feeling here."
              </p>
              <h5 className="font-bold mt-4">Jane Smith</h5>
              <p>Zumba Lover</p>
            </div>
            <div className="max-w-xs bg-amber-500 p-6 rounded-xl shadow-lg text-black">
              <p>
                "With the nutrition coaching, I’ve seen significant improvement in my
                performance and overall health."
              </p>
              <h5 className="font-bold mt-4">Sam Wilson</h5>
              <p>Nutrition Client</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full py-6 text-center text-yellow-300 z-10">
          <p className="text-sm">
            © {new Date().getFullYear()} GymPulse.io. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Page;
