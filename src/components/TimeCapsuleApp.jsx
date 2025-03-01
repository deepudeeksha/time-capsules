import React, { useState } from "react";
import { motion } from "framer-motion";

// Custom Card Component
const Card = ({ capsule }) => (
  <div className="border rounded-lg p-4 shadow-md bg-white">
    <h2 className="text-xl font-semibold">{capsule.title}</h2>
    <p className="text-gray-500">{capsule.date}</p>
    <p className="mt-2">{capsule.description}</p>
    {capsule.video && (
      <video controls className="mt-2 rounded-lg">
        <source src={capsule.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )}
  </div>
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

const TimeCapsuleApp = () => {
  const [capsules, setCapsules] = useState([
    { id: 1, title: "First Meeting", date: "2016-10-01", description: "Flirting Phase", video: "../../public/assets/first_capsule.mp4" },
    { id: 2, title: "In love!!!", date: "2017-01-01", description: "Dating Phase", video: "/assets/paris_trip.mp4" },
    { id: 3, title: "American University", date: "2019-08-26", description: "Hustle Days", video: "/assets/uni.mp4" },
  ]);

  return (
    <div className="p-4 max-w-4xl mx-auto text-center">
      <h1 className="text-7xl font-extrabold mb-6 text-yellow-400 uppercase tracking-wider title drop-shadow-lg animate-pulse">
        Our Time Capsule
      </h1>
      
      {/* Display Time Capsules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {capsules.map((capsule) => (
          <motion.div
            key={capsule.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card capsule={capsule} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TimeCapsuleApp;
