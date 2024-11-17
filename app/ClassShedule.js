import React, { useState } from "react";

const ClassShedule = () => {
  const [className, setClassName] = useState('');
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('');
  const [trainerId, setTrainerId] = useState('');

  // Sample data for assigned classes
  const sampleClasses = [
    {
      _id: "1",
      className: "Web Development Bootcamp",
      date: "2024-11-20",
      duration: 120,
      trainer: { name: "John Doe" },
    },
    {
      _id: "2",
      className: "Advanced React",
      date: "2024-11-22",
      duration: 90,
      trainer: { name: "Jane Smith" },
    },
    {
      _id: "3",
      className: "Node.js for Beginners",
      date: "2024-11-25",
      duration: 110,
      trainer: { name: "Michael Johnson" },
    }
  ];

  // Handle form submission for adding a new class (adding to sample data)
  const handleSubmit = (e) => {
    e.preventDefault();

    const newClass = { 
      _id: Math.random().toString(36).substr(2, 9), // Generate a random ID for demo purposes
      trainer: { name: "Sample Trainer" }, 
      className, 
      date, 
      duration 
    };

    sampleClasses.push(newClass); // Adding the new class to the sample data
    setClassName('');
    setDate('');
    setDuration('');
    setTrainerId('');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 relative z-[10]">

      {/* Form to add new class */}
      {/* <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <label htmlFor="trainerId" className="block text-lg">Trainer Name:</label>
          <input
            type="text"
            id="trainerId"
            value={trainerId}
            onChange={(e) => setTrainerId(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="className" className="block text-lg">Class Name:</label>
          <input
            type="text"
            id="className"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-lg">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="duration" className="block text-lg">Duration (in minutes):</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">Add Class</button>
      </form> */}

      {/* Display Assigned Classes */}
      <h2 className="text-3xl font-bold text-center mb-6">Assigned Classes</h2>
      <div className="space-y-4">
        {sampleClasses.length === 0 ? (
          <p>No classes assigned yet.</p>
        ) : (
          sampleClasses.map((cls) => (
            <div key={cls._id} className="p-4 border border-gray-300 rounded-md shadow-sm">
              <h3 className="text-xl font-semibold">{cls.className}</h3>
              <p><strong>Date:</strong> {new Date(cls.date).toLocaleDateString()}</p>
              <p><strong>Duration:</strong> {cls.duration} minutes</p>
              <p><strong>Trainer:</strong> {cls.trainer.name}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ClassShedule;
