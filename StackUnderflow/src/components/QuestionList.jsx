import { Link } from "react-router-dom";

const QuestionList = () => {
  const questions = [
    {
      id: 1,
      title: "How do I center a div?",
      votes: 2,
      answers: 0,
      views: 1342,
    },
    {
      id: 2,
      title: "Why is my code not working?",
      votes: -3,
      answers: 1,
      views: 421,
    },
    {
      id: 3,
      title: "Is JavaScript the same as Java?",
      votes: 0,
      answers: 2,
      views: 672,
    },
  ];

  return (
    <div className="space-y-4">
      {questions.map((q) => (
        <Link key={q.id} to={`/question/${q.id}`}>
          <div className="border-b p-3 flex items-center space-x-4 hover:bg-gray-100 cursor-pointer">
            <div className="text-center">
              <p className="font-bold">{q.votes}</p>
              <p className="text-xs text-gray-500">votes</p>
            </div>
            <div className="text-center">
              <p className="font-bold">{q.answers}</p>
              <p className="text-xs text-gray-500">answers</p>
            </div>
            <div className="text-center">
              <p className="font-bold">{q.views}</p>
              <p className="text-xs text-gray-500">views</p>
            </div>
            <p className="flex-1 text-blue-600">{q.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default QuestionList;
