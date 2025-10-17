import { Navigate, Route, Routes } from "react-router";
import { lazy, Suspense } from "react";

const MainPage = lazy(() => import("../src/pages/homePage/MainPage"));
const GamePage = lazy(() => import("../src/pages/gamePages/gamePage/GamePage"));

const MainRoutes = () => {
  return (
    <>
      <Suspense fallback={<div>loading...</div>} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
        <Route path="vote-for-anime-characters" element={<GamePage />} />
      </Routes>
    </>
  );
};

export default MainRoutes;