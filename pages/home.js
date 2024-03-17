import Link from "next/link";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Quiz from "../components/Quiz";

const Home = () => {
  return (
    <div className="">
      <Header title="" />
      <SideNav selectedTab="home">
        <section>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              DevOps Quiz Portal
            </h2>
            <p className="mt-4 text-lg font-medium text-gray-500">
              for Learn AWS in 30 Days series
            </p>
          </div>
          <hr className="mt-5" />
          <div className="flex justify-center items-center mt-5">
            <div className="justify-center">
              <Quiz />
            </div>
          </div>
        </section>
      </SideNav>
    </div>
  );
};

export default Home;
