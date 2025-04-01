import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-60 bg-orange-600 text-white h-screen p-4 shadow-lg">
      <h2 className="text-xl font-bold">Stack Underflow</h2>
      <hr className="my-4 border-orange-400" />

      <ul className="mt-4 space-y-2">
        <li>
          <Link
            to="/questions"
            className="block hover:bg-orange-500 p-2 rounded"
          >
            📌 Questions
          </Link>
        </li>
        <li>
          <Link
            to="/leaderboard"
            className="block hover:bg-orange-500 p-2 rounded"
          >
            🏆 Leaderboard
          </Link>
        </li>
        <li>
          <Link to="/captcha" className="block hover:bg-orange-500 p-2 rounded">
            🔒 Verify
          </Link>
        </li>
      </ul>

      {/* Separator Line */}
      {/* <hr className="my-4 border-orange-500" />

      <h3 className="mt-4 text-lg font-bold">Categories</h3>
      <ol className="mt-2 space-y-2">
        <li className="text-gray-300">✔️ All Questions</li>
        <li className="text-gray-300">❓ Newest (Still Unanswered)</li>
        <li className="text-gray-300">🔥 Popular (For No Reason)</li>
        <li className="text-gray-300">💀 Unanswered (All of Them)</li>
      </ol> */}
    </aside>
  );
};

export default Sidebar;
