import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const QuestionDetail = () => {
  const { id } = useParams();
  const localVotes = localStorage.getItem(`votes-${id}`);
  const [votes, setVotes] = useState(localVotes ? parseInt(localVotes) : 0);
  const [userAnswer, setUserAnswer] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [acceptedAnswer, setAcceptedAnswer] = useState(null);
  const [answers, setAnswers] = useState([
    { text: "Just Google it.", votes: -3 },
    { text: "Try restarting your computer.", votes: -1 },
    { text: "Skill issue.", votes: -2 },
  ]);

  useEffect(() => {
    localStorage.setItem(`votes-${id}`, votes);
  }, [votes, id]);

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    if (userAnswer.trim().length < 5) {
      setErrorMessage("❌ Your answer is too short. Please make it worse.");
    } else if (userAnswer.includes("help") || userAnswer.includes("?")) {
      setErrorMessage("❌ We don't allow useful answers here.");
    } else {
      const newAnswer = { text: userAnswer, votes: 0 };
      setAnswers([...answers, newAnswer]);
      setErrorMessage("✅ Your answer has been successfully ignored.");
    }
    setUserAnswer("");
  };

  const acceptWorstAnswer = () => {
    const worstAnswer = answers.reduce(
      (worst, current) => (current.votes < worst.votes ? current : worst),
      answers[0]
    );
    setAcceptedAnswer(worstAnswer.text);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Question #{id}</h1>
      <p className="text-gray-600">No real answers, just suffering.</p>

      {/* Voting Section */}
      <div className="flex items-center space-x-4 mt-4">
        <button
          onClick={() => setVotes(votes + 1)}
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
          ▲ Upvote
        </button>
        <p className="text-xl font-bold">{votes}</p>
        <button
          onClick={() => votes > -10 && setVotes(votes - 1)}
          className={`px-3 py-1 text-white rounded ${
            votes > -10
              ? "bg-red-500 hover:bg-red-600"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={votes <= -10}
        >
          ▼ Downvote
        </button>
      </div>

      {/* Answer Input */}
      <form onSubmit={handleAnswerSubmit} className="mt-4">
        <textarea
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Write your answer here..."
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Post Answer
        </button>
      </form>
      {errorMessage && <p className="mt-2 text-red-500">{errorMessage}</p>}

      {/* Answer List */}
      <div className="mt-4">
        <h2 className="text-lg font-bold">Answers:</h2>
        {answers.map((ans, index) => (
          <div key={index} className="mt-2 p-2 border rounded">
            <p>{ans.text}</p>
            <p className="text-sm text-gray-500">Votes: {ans.votes}</p>
          </div>
        ))}
      </div>

      {/* Accept Answer Button */}
      <div className="mt-4">
        <button
          onClick={acceptWorstAnswer}
          className="px-3 py-1 bg-green-700 text-white rounded hover:bg-green-800"
        >
          ✅ Accept Worst Answer
        </button>
        {acceptedAnswer && (
          <p className="mt-2 text-green-500 font-bold">
            Accepted Answer: "{acceptedAnswer}"
          </p>
        )}
      </div>

      {/* Flag as Useless */}
      <div className="mt-4">
        <button
          onClick={() =>
            alert("🚨 Report submitted. We will ignore it completely.")
          }
          className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          🚩 Flag as Useless
        </button>
      </div>

      {/* Close Account */}
      <div className="mt-4">
        <button
          onClick={() => alert("😂 Nice try. You’re stuck here forever.")}
          className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-800"
        >
          ❌ Close Account
        </button>
      </div>
    </div>
  );
};

export default QuestionDetail;
