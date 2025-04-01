import { useState } from "react";

const Leaderboard = () => {
  const [users] = useState([
    { name: "StackOverflowReject", points: -999 },
    { name: "GoogleCopyPaster", points: -750 },
    { name: "DidntReadDocs", points: -600 },
    { name: "Overthinker", points: -450 },
    { name: "SyntaxError", points: -300 },
  ]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">🏆 Stack Underflow Leaderboard</h1>
      <p className="text-gray-600">
        The **worst** users get **the most** points.
      </p>
      <ul className="mt-4">
        {users.map((user, index) => (
          <li
            key={index}
            className="p-2 border rounded my-2 flex justify-between"
          >
            <span>
              {index + 1}. {user.name}
            </span>
            <span className="text-red-500">{user.points} pts</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
