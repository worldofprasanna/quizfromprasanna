import React from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

const SideNav = ({ selectedTab, children }) => {
  const session = useSession();
  const router = useRouter();

  const logout = (e) => {
    e.preventDefault();
    if (session) {
      signOut();
    }
    router.replace("/");
  };

  const highlightTab = (option) => {
    if (option == selectedTab) {
      return "bg-gray-200";
    } else {
      return "";
    }
  };

  return (
    <div className="flex flex-col flex-1 bg-white">
      <div className="flex flex-1">
        <div className="hidden border-r border-gray-200 md:flex md:w-64 md:flex-col">
          <div className="flex flex-col pt-5 overflow-y-auto">
            <div className="flex flex-col justify-between flex-1 h-full px-4">
              <div className="space-y-4">
                <hr />
                <nav className="flex-1 space-y-1">
                  <Link
                    href="/"
                    title=""
                    className={`${highlightTab(
                      "home"
                    )} flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-gray-200 group`}
                  >
                    <svg
                      className="flex-shrink-0 mr-4 w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinejoin="round"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Home
                  </Link>
                  <Link
                    href="/creator"
                    title=""
                    className={`${highlightTab(
                      "creator"
                    )} flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-gray-200 group`}
                  >
                    <svg
                      className="flex-shrink-0 w-6 h-6 mr-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Create Quiz
                  </Link>
                </nav>

                <div>
                  <hr />
                  <nav className="flex-1 mt-4 space-y-1">
                    <Link
                      href="#"
                      title=""
                      onClick={logout}
                      className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-gray-200 group"
                    >
                      <svg
                        className="flex-shrink-0 w-6 h-6 mr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinejoin="round"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      Logout
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <main>
            <div className="px-4 pt-2 mx-auto sm:px-6 md:px-8">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};
export default SideNav;
