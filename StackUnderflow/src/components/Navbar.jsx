const Navbar = () => {
  return (
    <nav className="bg-white border-b shadow-sm p-3 flex justify-between items-center">
      <div className="font-bold text-xl text-orange-500">Stack Underflow</div>
      <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Search (but it does nothing)"
          className="border px-3 py-1 w-full rounded-md"
          disabled
        />
      </div>
      <button className="bg-orange-500 text-white px-4 py-1 rounded-md">
        Ask a Useless Question
      </button>
    </nav>
  );
};

export default Navbar;
