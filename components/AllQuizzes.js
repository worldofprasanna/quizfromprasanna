import React, { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loader from "./Loader";
import { useSession } from "next-auth/react";

const AllQuizzes = () => {
  const [quizzes, setQuizzes] = useState([]);
  const session = useSession();
  const idToken = session?.data?.idToken;
  console.log("Session Info", session, idToken);
  const fetchQuizzes = async () => {
    const serverURL = process.env.NEXT_PUBLIC_SERVER_URL;
    setLoading(true);
    try {
      const res = await fetch(`${serverURL}/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: idToken,
        },
      });
      const data = await res.json();
      setQuizzes(data["body"]["quizzes"]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      // alert("Error occurred while fetching data. Check console.");
      setLoading(false);
    }
  };
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchQuizzes();
  }, []);
  // const quizzes = [
  //   {
  //     id: 1,
  //     title: "Day 12: Serverless Applications in AWS",
  //     noOfQuizzes: 10,
  //     difficultyLevel: "Beginner",
  //   },
  //   {
  //     id: 2,
  //     title: "Quiz title 2",
  //     noOfQuizzes: 10,
  //     difficultyLevel: "Beginner",
  //   },
  //   {
  //     id: 3,
  //     title: "Quiz title 3",
  //     noOfQuizzes: 10,
  //     difficultyLevel: "Beginner",
  //   },
  // ];

  const { push } = useRouter();

  const difficultyLevelColor = (level) => {
    if (level === "Beginner") {
      return "green";
    } else if (level === "Intermediate") {
      return "yellow";
    } else {
      return "red";
    }
  };

  const goToParticularQuiz = (id) => {
    console.log("Navigating to ID", id);
    push("/questions?quiz_id=" + id);
  };

  return (
    <div className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              List of All Quizzes
            </h2>
          </div>
          {loading && <Loader />}

          <ul className="mt-6 space-y-4">
            {quizzes.map((quiz) => (
              <li
                className="bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl min-w-80 hover:cursor-pointer"
                onClick={() => goToParticularQuiz(quiz.id)}
                key={quiz.id}
              >
                <div className="px-5 py-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <img
                        className="flex-shrink-0 object-cover rounded-full w-9 h-9"
                        src={quiz.imageURL}
                        alt=""
                      />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-500">
                          Quiz ID: {quiz["id"]}
                        </p>
                        <p className="mt-1 text-sm font-bold text-gray-900">
                          {quiz.title}
                        </p>
                      </div>
                    </div>
                    {/* <p className="text-sm font-medium text-right text-gray-900">
                      $49.00
                    </p> */}
                  </div>
                </div>

                <div className="px-5 py-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center text-sm font-medium text-gray-900">
                      <div
                        className={`w-2.5 h-2.5 rounded-full bg-${difficultyLevelColor(
                          quiz.difficultyLevel
                        )}-500 flex-shrink-0 mr-2`}
                      ></div>
                      {quiz.difficultyLevel}
                    </span>

                    <p className="text-sm font-medium text-right text-gray-500">
                      No of questions: {quiz.noOfQuestions}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllQuizzes;
