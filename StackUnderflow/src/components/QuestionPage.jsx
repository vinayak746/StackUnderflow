import { useState } from "react";
import ImpossibleCaptcha from "../components/ImpossibleCaptcha";

const QuestionPage = () => {
  const [question, setQuestion] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isVerified) {
      alert("❌ You must pass the Impossible CAPTCHA first.");
      return;
    }
    alert("✅ Your ridiculous question has been submitted!");
    setQuestion("");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Ask a Useless Question</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your absurd question..."
          className="w-full border p-2 rounded"
        />
        <ImpossibleCaptcha onVerify={setIsVerified} />
        <button
          type="submit"
          className={`mt-2 px-4 py-2 rounded text-white ${
            isVerified ? "bg-green-500 hover:bg-green-600" : "bg-gray-400"
          }`}
          disabled={!isVerified}
        >
          Submit Question
        </button>
      </form>
    </div>
  );
};

export default QuestionPage;
