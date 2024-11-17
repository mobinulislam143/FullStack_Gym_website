import React from "react"
import Link from 'next/link';

const Navbar = (props) => {
  return (
    // <div>
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
            <Link
              href="/user/trainer"
              className="btn bg-white hover:bg-gray-400 px-4 rounded-md py-2 text-black hover:text-amber-500 transition-colors"
            >
              Profile
            </Link>
          </div>
        </nav>

  )
};

export default Navbar;
