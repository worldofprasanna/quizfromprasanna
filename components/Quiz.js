import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import QuestionView from "./QuestionView";
import ResultView from "./ResultView";
import { useSession } from "next-auth/react";
import Loader from "./Loader";

const Quiz = () => {
  const session = useSession();

  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [score, setScore] = useState("");
  const [percentage, setPercentage] = useState("");
  const [questions, setQuestions] = useState([]);
  const [showResultView, setShowResultView] = useState(false);
  const [showQuestionsView, setShowQuestionsView] = useState(true);
  const router = useRouter();
  const idToken = session?.data?.idToken;
  const searchParams = useSearchParams();
  const quiz_id = searchParams.get("quiz_id");
  const userEmail = session?.data?.user?.email;

  const showQuestions = () => {
    router.push("/");
  };

  const showResults = () => {
    setShowQuestionsView(false);
    setShowResultView(true);
  };

  const getQuestions = async () => {
    const serverURL = process.env.NEXT_PUBLIC_SERVER_URL;
    setLoading(true);
    try {
      const res = await fetch(`${serverURL}/quiz`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: idToken,
        },
        body: JSON.stringify({ quiz_id }),
      });
      const data = await res.json();
      console.log(data);
      setQuestions(data["body"]["questions"]);
      setTitle(data["body"]["title"]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      // alert("Error occurred while fetching data. Check console.");
      setLoading(false);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const computeResult = async (answers) => {
    const serverURL = process.env.NEXT_PUBLIC_SERVER_URL;
    try {
      const res = await fetch(`${serverURL}/compute-score`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: idToken,
        },
        body: JSON.stringify({
          answers,
          user_id: userEmail,
          quiz_id,
        }),
      });
      const data = await res.json();
      setScore(data["body"]["score"]);
      setPercentage(data["body"]["percentage"]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      // alert("Error occurred while fetching data. Check console.");
      setLoading(false);
    }
    showResults();
  };

  return (
    <div className="mt-8 ">
      {loading && <Loader />}
      {!loading && showQuestionsView && (
        <QuestionView
          title={title}
          questions={questions}
          computeResult={(answers) => computeResult(answers)}
        />
      )}
      {!loading && showResultView && (
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
