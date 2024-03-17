import React from "react";
import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../public/logo.svg";

const Header = ({ title }) => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();
  const user = useUser();
  console.log("User", user);

  const logout = (e) => {
    e.preventDefault();
    if (session) {
      supabase.auth.signOut();
    }
    router.replace("/");
  };

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
            <img
              className="flex-shrink-0 object-cover rounded-full w-9 h-9"
              src={user?.user_metadata.avatar_url}
              alt=""
            />
            <div className="h-9 text-md mt-2 font-medium text-gray-500">
              {user?.user_metadata?.user_name}
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
