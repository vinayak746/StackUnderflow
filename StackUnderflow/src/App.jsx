import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Leaderboard from "./components/Leaderboard";
import SearchResults from "./components/SearchResults";
import ImpossibleCaptcha from "./components/ImpossibleCaptcha";
import QuestionList from "./components/QuestionList";
import QuestionDetail from "./pages/QuestionDetail";
import QuestionPage from "./components/QuestionPage";

function App() {
  return (
    <div className="App flex h-screen bg-white">
      <Sidebar className="w-1/5 bg-orange-700 text-white p-4 shadow-lg" />
      <div className="flex flex-col w-4/5">
        <Navbar className="bg-orange-600 text-white p-4 shadow-md text-xl font-bold" />
        <div className="p-6 flex-grow overflow-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/questions" />} />
            <Route path="/questions" element={<QuestionList />} />
            <Route path="/questions/:id" element={<QuestionDetail />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/captcha" element={<ImpossibleCaptcha />} />
            <Route path="/ask" element={<QuestionPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
