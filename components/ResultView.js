import React from "react";

const ResultView = ({ score, percentage, onBack }) => {
  return (
    <section class="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-md mx-auto text-center">
          <svg
            class="w-12 h-12 mx-auto text-green-900"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p class="mt-6 text-xl font-bold text-gray-900">
            Your score is {score} and percentage is {percentage} / 100.
          </p>
          <p class="mt-2 text-base font-medium text-gray-500">
            Saved Successfully
          </p>
        </div>

        <div class="max-w-xl mx-auto overflow-hidden bg-white shadow-xl md:mt-12 rounded-xl shadow-gray-400/10">
          <div class="p-6">
            {/* <img
                  class="object-cover h-auto mx-auto rounded-xl w-52 sm:mx-0"
                  src="https://avatars.githubusercontent.com/u/1291984?v=4"
                  alt=""
                /> */}

            <div class="text-center">
              <button
                title=""
                class="inline-flex items-center justify-center w-full px-5 py-3 text-xs font-bold tracking-widest text-gray-500 uppercase transition-all duration-200 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:bg-gray-100 hover:text-gray-900"
                role="button"
                onClick={onBack}
              >
                Back to All Quizzes
              </button>

              {/* <div class="mt-6 sm:ml-8 sm:mt-0">
                <p class="text-2xl font-bold text-gray-900">
                  {userProfile.name}
                </p>

                <ul class="mt-6 space-y-5">
                  <li class="flex items-center justify-between">
                    <p class="text-xs font-bold tracking-wide text-gray-500 uppercase">
                      Total Quiz Attended:
                    </p>
                    <div class="flex items-end justify-end">
                      <p class="text-base font-bold text-gray-900">
                        {userProfile.totalQuizAttended}
                      </p>
                    </div>
                  </li>

                  <li class="flex items-center justify-between">
                    <p class="text-xs font-bold tracking-wide text-gray-500 uppercase">
                      Average Score:
                    </p>
                    <p class="text-base font-bold text-gray-900">
                      {userProfile.averageScore}
                    </p>
                  </li>
                </ul>

                <p class="mt-6 text-xs font-bold tracking-wide text-gray-500 uppercase">
                  Description:
                </p>
                <p class="mt-4 text-sm font-medium text-gray-900">
                  Passionate Learner and Indie Hacker
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultView;
