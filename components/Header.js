import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../public/logo.svg";
import { useSession } from "next-auth/react";

const Header = ({ title }) => {
  const session = useSession();
  const router = useRouter();
  const user = session?.data?.user;
  console.log("User", user?.email);
  // const actualSession = await getSession();
  // console.log("atual session", actualSession);
  // console.log("SEssion Token", getToken);

  return (
    <header className="pt-4 bg-white" x-data="{expanded: false}">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" title="" className="flex">
              <Image src={logo} width="35" height="35" alt="" />
              <div className="text-lg mt-6 text-gray-700">
                DevOps with Prasanna
              </div>
              {/* <img className="" src="/logo.png" alt="" /> */}
            </a>
            {/* <hr className="mt-4 bg-slate-200" /> */}
          </div>
          <div className="text-2xl">
            {title}
            <hr className="bg-slate-200" />
          </div>
          <nav className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-5">
            <div className="h-9 text-md mt-2 font-medium text-gray-500">
              Welcome, {user?.email}
            </div>
            {/* <a
              title=""
              className="inline-flex items-center justify-center px-6 py-2 text-base font-bold leading-5 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
              onClick={logout}
            >
              {session ? 'Logout' : 'Login'}
            </a> */}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
