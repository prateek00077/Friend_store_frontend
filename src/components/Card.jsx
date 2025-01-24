import React from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";

const Card = ({ name, role, desc, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105 w-full max-w-sm mx-auto">
      {/* Top Section */}
      <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-200 to-yellow-400">
        <img
          src={image}
          alt={`${name}'s profile`}
          className="w-14 h-14 rounded-full shadow-lg border-2 border-white"
        />
        <div className="text-gray-800">
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
        <div className="ml-auto flex gap-2">
          <button className="text-blue-500 hover:text-blue-700 transition">
            <CiEdit size={20} />
          </button>
          <button className="text-red-500 hover:text-red-700 transition">
            <RiDeleteBinLine size={20} />
          </button>
        </div>
      </div>

      {/* Description Section */}
      <div className="p-4 text-sm text-gray-700 bg-gray-50">
        <p className="line-clamp-3">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
