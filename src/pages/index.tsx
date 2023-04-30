import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./home"));
const SignIn = lazy(() => import("./auth/sign-in"));
const Onboarding = lazy(() => import("./auth/onboarding"));
const WorkspacesNew = lazy(() => import("./workspaces/new"));
const Boards = lazy(() => import("./boards"));
const BoardsIsEmpty = lazy(() => import("./boards/empty"));
const BoardsNotFound = lazy(() => import("./boards/not-found"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/sign-in" element={<SignIn />} />
      <Route path="/auth/onboarding" element={<Onboarding />} />
      <Route path="/workspaces/new" element={<WorkspacesNew />} />
      <Route path="/boards" element={<Boards />} />
      <Route path="/boards/empty" element={<BoardsIsEmpty />} />
      <Route path="/boards/not-found" element={<BoardsNotFound />} />
    </Routes>
  );
};
