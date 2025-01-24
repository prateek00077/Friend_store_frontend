import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import AddCard from "./components/AddCard";
import Card from "./components/Card";
import axios from "axios";
import React from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [friends, setFriends] = useState([]);

  const fetchFriends = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/api/friends");
      console.log(response.data);
      setFriends(response.data);
    } catch (error) {
      console.error("Error fetching friends:", error);
    }
  };

  useEffect(() => {
    fetchFriends();
  }, []);

  return (
    <div className="bg-gradient-to-b from-slate-800 to-slate-900 flex flex-col items-center min-h-screen w-full p-4">
      {/* Navbar */}
      <Navbar setShowModal={setShowModal} />

      {/* Title */}
      <div className="my-10 text-center">
        <h1 className="text-cyan-500 font-bold text-5xl mb-4 drop-shadow-lg animate-pulse">
          MY BESTIES 🚀
        </h1>
        <p className="text-gray-300 text-lg italic">
          Celebrate your friendships in style!
        </p>
      </div>

      {/* Add Friend Modal */}
      {showModal && <AddCard setShowModal={setShowModal} />}

      {/* Friends Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {friends.length > 0 ? (
          friends.map((friend) => (
            <Card
              key={friend.id}
              name={friend.name}
              role={friend.role}
              image={friend.imageUrl}
              desc={friend.description}
            />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center text-lg">
            No friends found. Click the "+" button to add one!
          </p>
        )}
      </div>

      {/* Footer */}
      <footer className="text-gray-400 text-sm mt-10">
        Made with 💙 by Abhishek and Prateek
      </footer>
    </div>
  );
}

export default App;