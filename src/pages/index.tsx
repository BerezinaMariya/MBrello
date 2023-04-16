import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./home"));
const SignIn = lazy(() => import("./auth/sign-in"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/sign-in" element={<SignIn />} />
    </Routes>
  );
};
