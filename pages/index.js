import Login from "../components/Login";
import { useSession } from "next-auth/react";
import Home from "./home";

const InitialPage = () => {
  const session = useSession();
  console.log("Session", session.status);
  console.log("Auth Session Token", session);
  return (
    <div>{session.status === "unauthenticated" ? <Login /> : <Home />}</div>
  );
};

export default InitialPage;
