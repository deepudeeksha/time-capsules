import React, { useState } from "react";
import { motion } from "framer-motion";

// Custom Card Component
const Card = ({ children }) => (
  <div className="border rounded-lg p-4 shadow-md bg-white">{children}</div>
);

// Custom Button Component
const Button = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
  >
    {children}
  </button>
);

// Input Component
const Input = ({ ...props }) => (
  <input
    {...props}
    className="border rounded-lg p-2 w-full focus:ring focus:ring-blue-300"
  />
);

const TimeCapsuleApp = () => {
  const [capsules, setCapsules] = useState([
    { id: 1, title: "First Capsule", date: "2023-01-01", description: "My first memory." },
    { id: 2, title: "Trip to Paris", date: "2024-06-15", description: "A magical trip!" },
  ]);

  const [newCapsule, setNewCapsule] = useState({ title: "", date: "", description: "" });

  const addCapsule = () => {
    if (newCapsule.title && newCapsule.date) {
      setCapsules([...capsules, { id: Date.now(), ...newCapsule }]);
      setNewCapsule({ title: "", date: "", description: "" });
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">My Time Capsules</h1>
      
      {/* Display Time Capsules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {capsules.map((capsule) => (
          <motion.div
            key={capsule.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card>
              <h2 className="text-xl font-semibold">{capsule.title}</h2>
              <p className="text-gray-500">{capsule.date}</p>
              <p className="mt-2">{capsule.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Add New Time Capsule */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Add a New Time Capsule</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <Input
            placeholder="Title"
            value={newCapsule.title}
            onChange={(e) => setNewCapsule({ ...newCapsule, title: e.target.value })}
          />
          <Input
            type="date"
            value={newCapsule.date}
            onChange={(e) => setNewCapsule({ ...newCapsule, date: e.target.value })}
          />
          <Input
            placeholder="Description"
            value={newCapsule.description}
            onChange={(e) => setNewCapsule({ ...newCapsule, description: e.target.value })}
          />
        </div>
        <Button className="mt-4" onClick={addCapsule}>
          Add Capsule
        </Button>
      </div>
    </div>
  );
};

export default TimeCapsuleApp;
