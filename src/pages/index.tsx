import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./home"));
const SignIn = lazy(() => import("./auth/sign-in"));
const Onboarding = lazy(() => import("./auth/onboarding"));
const WorkspacesNew = lazy(() => import("./workspaces/new"));
const WorkspacesBoards = lazy(() => import("./workspaces/boards"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/sign-in" element={<SignIn />} />
      <Route path="/auth/onboarding" element={<Onboarding />} />
      <Route path="/workspaces/new" element={<WorkspacesNew />} />
      <Route path="/workspaces/boards" element={<WorkspacesBoards />} />
    </Routes>
  );
};
