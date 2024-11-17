import React from "react";

const Page = () => {
  // Sample user data
  const userData = {
    email: "user@example.com",
    password: "********", // Masked for security
    full_name: "John Doe",
    role: "trainer", // or 'trainee'
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dmpsrcunj/image/upload/v1731786697/Pngtree_3d_powerful_body_builder_gym_15851228_l23mj3.png")',
          opacity: 0.2, // Adjust the opacity as needed
        }}
      ></div>

      {/* Content */}
      <div className="bg-yellow-100 shadow-md rounded-lg p-6 w-full max-w-sm relative z-10">
        <h1 className="text-2xl font-bold text-amber-600 text-center mb-4">
          Profile Details
        </h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name:
            </label>
            <p className="text-lg font-semibold text-amber-800">{userData.full_name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <p className="text-lg font-semibold text-amber-800">{userData.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password:
            </label>
            <p className="text-lg font-semibold text-amber-800">{userData.password}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Role:
            </label>
            <p className="text-lg font-semibold text-amber-800">
              {userData.role.charAt(0).toUpperCase() + userData.role.slice(1)}
            </p>
          </div>
        </div>
        <div className="mt-6">
          <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
