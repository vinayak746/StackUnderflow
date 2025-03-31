import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="p-4 flex-1">
          {" "}
          {/* This is where questions will go */}
        </main>
      </div>
    </div>
  );
}

export default App;
