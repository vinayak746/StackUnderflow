const Sidebar = () => {
  return (
    <aside className="w-60 bg-gray-100 h-screen p-4">
      <ul className="space-y-2">
        <li className="font-bold text-gray-700">All Questions</li>
        <li className="text-gray-600">Newest (Still Unanswered)</li>
        <li className="text-gray-600">Popular (For No Reason)</li>
        <li className="text-gray-600">Unanswered (All of Them)</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
