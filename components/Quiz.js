import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Quiz = () => {
  const [generating, setGenerating] = useState(false);
  const router = useRouter();

  const computeResult = async (e) => {
    e.preventDefault();
    router.push("/result");
  };

  return (
    <div className="mt-8 ">
      <div className="py-3 bg-gray-50 border max-w-8xl">
        <div className="container">
          <form>
            <div className="px-4 sm:px-6 lg:px-8 max-w-12xl">
              <div className="max-w-lg">
                <div>
                  <label
                    htmlFor=""
                    className="block text-lg font-bold text-gray-900"
                  >
                    {" "}
                    Quiz for Session 11: Logging &amp; Monitoring in Cloudwatch{" "}
                  </label>
                  <div className="mt-2 pt-12">
                    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                      <div class="max-w-sm mx-auto">
                        <p class="text-md font-bold text-gray-900">
                          1. What are the functionalities provided by
                          Cloudwatch?
                        </p>

                        <div class="mt-6 space-y-3">
                          <div class="relative flex items-center">
                            <div class="flex items-center h-5">
                              <input
                                type="checkbox"
                                name="terms"
                                id="terms"
                                class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-0"
                                checked
                              />
                            </div>

                            <div class="ml-3">
                              <p class="text-md font-medium text-gray-700">
                                {" "}
                                Centralised Logging{" "}
                              </p>
                            </div>
                          </div>

                          <div class="relative flex items-center">
                            <div class="flex items-center h-5">
                              <input
                                type="checkbox"
                                name="profile"
                                id="profile"
                                class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-0"
                                checked
                              />
                            </div>

                            <div class="ml-3">
                              <p class="text-md font-medium text-gray-700">
                                {" "}
                                Monitoring for all AWS Services{" "}
                              </p>
                            </div>
                          </div>
                          <div class="relative flex items-center">
                            <div class="flex items-center h-5">
                              <input
                                type="checkbox"
                                name="profile"
                                id="profile"
                                class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-0"
                              />
                            </div>

                            <div class="ml-3">
                              <p class="text-md font-medium text-gray-700">
                                {" "}
                                Storing Blob Storage{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-2 pt-12">
                    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                      <div class="max-w-sm mx-auto">
                        <p class="text-md font-bold text-gray-900">
                          2. What is true about Cloudwatch?
                        </p>
                        <p class="text-sm font-bold text-gray-900"></p>

                        <div class="mt-6 space-y-4" x-data="{ selected: 2 }">
                          <div class="flex items-start">
                            <div class="flex items-center h-5 pt-1.5">
                              <input
                                type="radio"
                                name="visibility"
                                id="public"
                                class="w-5 h-5 text-indigo-600 border-gray-300 focus:ring-0"
                                x-model="selected"
                                value="1"
                              />
                            </div>

                            <div class="ml-3">
                              <p class="text-md font-medium text-gray-700">
                                {" "}
                                Basic Monitoring is free for all Services{" "}
                              </p>
                            </div>
                          </div>

                          <div class="flex items-start">
                            <div class="flex items-center h-5 pt-1.5">
                              <input
                                type="radio"
                                name="visibility"
                                id="private"
                                class="w-5 h-5 text-indigo-600 border-gray-300 focus:ring-0"
                                x-model="selected"
                                value="2"
                              />
                            </div>

                            <div class="ml-4">
                              <p class="text-md font-medium text-gray-700">
                                {" "}
                                Logging comes by default for all EC2 Instances{" "}
                              </p>
                            </div>
                          </div>

                          <div class="flex items-start">
                            <div class="flex items-center h-5 pt-1.5">
                              <input
                                type="radio"
                                name="visibility"
                                id="unlisted"
                                class="w-5 h-5 text-indigo-600 border-gray-300 focus:ring-0"
                                x-model="selected"
                                value="3"
                              />
                            </div>

                            <div class="ml-4">
                              <p class="text-md font-medium text-gray-700">
                                {" "}
                                Logging for Lambda, VPC Flow Logs comes by
                                default{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="mt-2 pt-12">
                    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                      <div class="max-w-xl mx-auto">
                        <div>
                          <p class="text-md font-bold text-gray-900">
                            3. Which Service used for Monitoring, Logging?{" "}
                          </p>
                          <p class="text-sm font-bold text-gray-900"></p>

                          <div class="mt-2">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder=""
                              value="Cloudwatch"
                              class="block px-4 py-3 placeholder-gray-500 border-gray-300 border rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-2 pt-12 pb-12">
                    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                      <div class="max-w-sm mx-auto">
                        <p class="text-md font-bold text-gray-900">
                          4. What is the default monitoring interval for Basic
                          Cloudwatch Monitoring in EC2?
                        </p>
                        <p class="text-sm font-bold text-gray-900"></p>

                        <div class="mt-6 space-y-4" x-data="{ selected: 2 }">
                          <div class="flex items-start">
                            <div class="flex items-center h-5 pt-1.5">
                              <input
                                type="radio"
                                name="visibility"
                                id="public"
                                class="w-5 h-5 text-indigo-600 border-gray-300 focus:ring-0"
                                x-model="selected"
                                value="1"
                              />
                            </div>

                            <div class="ml-4">
                              <p class="text-md font-medium text-gray-700">
                                {" "}
                                5 minutes{" "}
                              </p>
                            </div>
                          </div>

                          <div class="flex items-start">
                            <div class="flex items-center h-5 pt-1.5">
                              <input
                                type="radio"
                                name="visibility"
                                id="private"
                                class="w-5 h-5 text-indigo-600 border-gray-300 focus:ring-0"
                                x-model="selected"
                                value="2"
                              />
                            </div>

                            <div class="ml-4">
                              <p class="text-md font-medium text-gray-700">
                                {" "}
                                1 minute{" "}
                              </p>
                            </div>
                          </div>

                          <div class="flex items-start">
                            <div class="flex items-center h-5 pt-1.5">
                              <input
                                type="radio"
                                name="visibility"
                                id="unlisted"
                                class="w-5 h-5 text-indigo-600 border-gray-300 focus:ring-0"
                                x-model="selected"
                                value="3"
                              />
                            </div>

                            <div class="ml-4">
                              <p class="text-md font-medium text-gray-700">
                                {" "}
                                20 minutes{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-xl mt-3 flex justify-center">
                  {generating ? (
                    <div
                      role="status"
                      className="inline-flex items-center justify-center px-6 py-3"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    <button
                      // type="submit"
                      className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
                      onClick={computeResult}
                    >
                      Submit
                    </button>
                  )}
                  <button
                    // onClick={closeWindow}
                    className="md:ml-3 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-red-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 hover:bg-red-500"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
