import { useState } from "react";

const ImpossibleCaptcha = ({ onVerify }) => {
  const challenges = [
    { question: "Select all images of working code.", correctAnswer: "none" },
    { question: "What is 2 + 2? (Wrong answers only)", correctAnswer: "5" },
    {
      question: "Prove you're human: Write a JavaScript one-liner that works.",
      correctAnswer: "console.log('hi')",
    },
    {
      question: "Spell 'captcha' backwards while blindfolded.",
      correctAnswer: "ahptcac",
    },
    {
      question: "Click the invisible checkbox below.",
      correctAnswer: "???",
      hidden: true,
    },
  ];

  const [captchaIndex] = useState(
    Math.floor(Math.random() * challenges.length)
  );
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = Math.random() > 0.8; // 80% chance of failure
    if (success) {
      setMessage("✅ You somehow passed. Must be a bug.");
      onVerify(true);
    } else {
      setMessage("❌ Verification failed. Try again (but it won't help).");
      onVerify(false);
    }
  };

  return (
    <div className="bg-gray-200 p-4 rounded">
      <p className="font-bold">{challenges[captchaIndex].question}</p>
      {challenges[captchaIndex].hidden ? (
        <p className="text-gray-400">(It’s invisible, figure it out.)</p>
      ) : null}
      <form onSubmit={handleSubmit} className="mt-2">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Your useless answer..."
          className="border p-2 w-full rounded"
        />
        <button
          type="submit"
          className="mt-2 bg-orange-500 text-white px-4 py-1 rounded"
        >
          Verify
        </button>
      </form>
      {message && <p className="mt-2 text-red-500">{message}</p>}
    </div>
  );
};

export default ImpossibleCaptcha;
