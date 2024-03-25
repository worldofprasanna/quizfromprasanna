import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import QuestionView from "./QuestionView";
import ResultView from "./ResultView";
import { useSession } from "next-auth/react";

const Quiz = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [score, setScore] = useState("");
  const [percentage, setPercentage] = useState("");
  const [questions, setQuestions] = useState([]);
  const [showResultView, setShowResultView] = useState(false);
  const [showQuestionsView, setShowQuestionsView] = useState(true);
  const router = useRouter();

  const showQuestions = () => {
    router.push("/");
  };

  const showResults = () => {
    setShowQuestionsView(false);
    setShowResultView(true);
  };

  const getQuestions = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://zdyqvvzcpi.execute-api.ap-south-1.amazonaws.com/v1/quiz`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ quiz_id: "1" }),
        }
      );
      const data = await res.json();
      console.log(data);
      setQuestions(data["body"]["questions"]);
      setTitle(data["body"]["title"]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const computeResult = async (answers) => {
    try {
      const res = await fetch(
        `https://zdyqvvzcpi.execute-api.ap-south-1.amazonaws.com/v1/compute-score`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            answers,
            user_id: "Prasanna",
            quiz_id: "1",
          }),
        }
      );
      const data = await res.json();
      console.log(data);
      setScore("3");
      setPercentage("67");
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
    showResults();
  };

  return (
    <div className="mt-8 ">
      {showQuestionsView && (
        <QuestionView
          title={title}
          questions={questions}
          computeResult={(answers) => computeResult(answers)}
        />
      )}
      {showResultView && (
        <ResultView
          score={score}
          percentage={percentage}
          onBack={showQuestions}
        />
      )}
    </div>
  );
};

export default Quiz;
