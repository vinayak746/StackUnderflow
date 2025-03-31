import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import QuestionList from "./components/QuestionList";
import QuestionDetail from "./pages/QuestionDetail";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="p-4 flex-1">
          <Routes>
            <Route path="/" element={<QuestionList />} />
            <Route path="/question/:id" element={<QuestionDetail />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
