'use client'
import React, { useState } from "react";

const Page = () => {
  // Initial class data
  const [classes, setClasses] = useState([
    {
      id: 1,
      trainer: "John Doe",
      className: "Yoga Basics",
      date: "2024-11-20",
      duration: "1 hour",
    },
    {
      id: 2,
      trainer: "Jane Smith",
      className: "Advanced Pilates",
      date: "2024-11-21",
      duration: "1.5 hours",
    },
    {
      id: 3,
      trainer: "Emily Johnson",
      className: "Cardio Blast",
      date: "2024-11-22",
      duration: "2 hours",
    },
  ]);

  // Handle delete class
  const deleteClass = (id) => {
    setClasses((prev) => prev.filter((cls) => cls.id !== id));
  };

  // Handle edit class
  const editClass = (id) => {
    const classToEdit = classes.find((cls) => cls.id === id);
    const newClassName = prompt("Edit Class Name:", classToEdit.className);
    const newDate = prompt("Edit Date (YYYY-MM-DD):", classToEdit.date);
    const newDuration = prompt("Edit Duration (e.g., 1 hour):", classToEdit.duration);

    if (newClassName && newDate && newDuration) {
      setClasses((prev) =>
        prev.map((cls) =>
          cls.id === id ? { ...cls, className: newClassName, date: newDate, duration: newDuration } : cls
        )
      );
    }
  };

  return (
    <div className="p-6" style={{ backgroundColor: "#FFF8E1" }}>
      <h1 className="text-center mb-4" style={{ color: "#FFCA28", fontWeight: "bold" }}>
        Class Management
      </h1>
      <div className="table-responsive">
        <table className="table table-bordered table-hover" style={{ width: "100%" }}>
          <thead className="text-white" style={{ backgroundColor: "#FFAB00" }}>
            <tr>
              <th>#</th>
              <th>Trainer</th>
              <th>Class Name</th>
              <th>Date</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls, index) => (
              <tr key={cls.id}>
                <td>{index + 1}</td>
                <td>{cls.trainer}</td>
                <td>{cls.className}</td>
                <td>{cls.date}</td>
                <td>{cls.duration}</td>
                <td>
                  <button
                    className="btn btn-sm mx-1"
                    style={{
                      backgroundColor: "#FFD740",
                      color: "#000",
                      fontWeight: "bold",
                      border: "none",
                      borderRadius: "4px",
                    }}
                    onClick={() => editClass(cls.id)}
                  >
                    ✏️ Edit
                  </button>
                  <button
                    className="btn btn-sm mx-1"
                    style={{
                      backgroundColor: "#FF5252",
                      color: "#FFF",
                      fontWeight: "bold",
                      border: "none",
                      borderRadius: "4px",
                    }}
                    onClick={() => deleteClass(cls.id)}
                  >
                    🗑️ Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
