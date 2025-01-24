import axios from "axios";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const AddCard = ({ setShowModal }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [desc, setDesc] = useState("");
  const [gender, setGender] = useState("");

  const addFriend = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/api/friends", {
        name,
        role,
        description: desc,
        gender,
      });
      console.log(response.data);
      setShowModal(false);
    } catch (error) {
      console.error("Error adding friend:", error);
    }
  };

  return (
    <div className="fixed  w-full h-full bg-opacity-60 flex justify-center items-center backdrop-blur-xs z-50">
      <div className="bg-gradient-to-br from-gray-700 via-slate-800 to-cyan-800 w-full max-w-md rounded-xl shadow-2xl p-8 text-white transform transition-all duration-300 ease-in-out">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Add a New Friend 😍</h2>
          <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-red-400 transition duration-300">
            <RxCross2 size={30} />
          </button>
        </div>

        {/* Name and Role */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-2">Full Name</label>
            <input
              type="text"
              placeholder="e.g., Prateek Pandey"
              className="py-3 px-4 bg-gray-800 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-medium mb-2">Role</label>
            <input
              type="text"
              placeholder="e.g., SDE1"
              className="py-3 px-4 bg-gray-800 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col mb-6">
          <label className="text-lg font-medium mb-2">Description</label>
          <textarea
            placeholder="Write a short description"
            className="py-3 px-4 bg-gray-800 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none h-24"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>

        {/* Gender Selection */}
        <div className="flex gap-4 mb-6">
          <label className="text-lg flex items-center">
            <input
              type="radio"
              name="gender"
              className="mr-2 accent-cyan-500"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>
          <label className="text-lg flex items-center">
            <input
              type="radio"
              name="gender"
              className="mr-2 accent-pink-500"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
            className="bg-cyan-500 text-lg font-medium py-2 px-6 rounded-lg hover:bg-cyan-600 transition duration-300"
            onClick={addFriend}
          >
            Add
          </button>
          <button
            className="bg-gray-700 text-lg font-medium py-2 px-6 rounded-lg hover:bg-gray-600 transition duration-300"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCard;