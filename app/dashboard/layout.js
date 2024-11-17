'use client'

import { useEffect, useState } from "react";
import Axios from "axios";
import Link from "next/link";

const Page = ({children}) => {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await Axios.get("/api/trainer");  // Replace with your API endpoint
        setTrainers(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching trainers");
        setLoading(false);
      }
    };

    fetchTrainers();
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-amber-600 text-white w-64 p-4 h-screen">
        <h2 className="text-lg font-bold mb-6">Sidebar</h2>
        <ul>
          <li className="mb-4">
            <Link href="/dashboard" className="hover:text-gray-400">Dashboard</Link>
          </li>
          <li className="mb-4">
            <Link href="/dashboard/admin/trainer" className="hover:text-gray-400">Manage Trainers</Link>
          </li>
          <li className="mb-4">
            <Link href="/dashboard/admin/class" className="hover:text-gray-400">Class Scheduling</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Navbar */}
        <div className="bg-yellow-700 text-white p-4">
          <h2 className="text-xl font-bold">Admin Dashboard</h2>
        </div>

        <div className="p-6">
         {children}

          {/* {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <div>
              <h2 className="text-lg font-semibold mt-6">Trainer List</h2>
              <table className="min-w-full table-auto mt-4">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border">ID</th>
                    <th className="px-4 py-2 border">Name</th>
                    <th className="px-4 py-2 border">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {trainers.map((trainer) => (
                    <tr key={trainer.id}>
                      <td className="px-4 py-2 border">{trainer.id}</td>
                      <td className="px-4 py-2 border">{trainer.name}</td>
                      <td className="px-4 py-2 border">{trainer.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Page;
