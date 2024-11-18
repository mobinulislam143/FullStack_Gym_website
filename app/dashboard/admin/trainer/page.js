'use client'
import React, { useState } from "react";

const TrainerPage = () => {
  // Initial trainer data
  const [trainers, setTrainers] = useState([
    {
      id: 1,
      name: "John Doe",
      expertise: "Yoga Instructor",
      availableDays: "Monday, Wednesday, Friday",
    },
    {
      id: 2,
      name: "Jane Smith",
      expertise: "Pilates Trainer",
      availableDays: "Tuesday, Thursday",
    },
    {
      id: 3,
      name: "Emily Johnson",
      expertise: "Cardio Specialist",
      availableDays: "Saturday, Sunday",
    },
  ]);

  // Handle delete trainer
  const deleteTrainer = (id) => {
    setTrainers((prev) => prev.filter((trainer) => trainer.id !== id));
  };

  // Handle edit trainer
  const editTrainer = (id) => {
    const trainerToEdit = trainers.find((trainer) => trainer.id === id);
    const newName = prompt("Edit Trainer Name:", trainerToEdit.name);
    const newExpertise = prompt("Edit Expertise:", trainerToEdit.expertise);
    const newAvailableDays = prompt(
      "Edit Available Days (e.g., Monday, Wednesday):",
      trainerToEdit.availableDays
    );

    if (newName && newExpertise && newAvailableDays) {
      setTrainers((prev) =>
        prev.map((trainer) =>
          trainer.id === id
            ? { ...trainer, name: newName, expertise: newExpertise, availableDays: newAvailableDays }
            : trainer
        )
      );
    }
  };

  return (
    <div className="p-6" style={{ backgroundColor: "#FFF8E1" }}>
      <h1 className="text-center mb-4" style={{ color: "#FFCA28", fontWeight: "bold" }}>
        Trainer Management
      </h1>
      <div className="table-responsive">
        <table className="table table-bordered table-hover" style={{ width: "100%" }}>
          <thead className="text-white" style={{ backgroundColor: "#FFAB00" }}>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Expertise</th>
              <th>Available Days</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {trainers.map((trainer, index) => (
              <tr key={trainer.id}>
                <td>{index + 1}</td>
                <td>{trainer.name}</td>
                <td>{trainer.expertise}</td>
                <td>{trainer.availableDays}</td>
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
                    onClick={() => editTrainer(trainer.id)}
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
                    onClick={() => deleteTrainer(trainer.id)}
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

export default TrainerPage;
