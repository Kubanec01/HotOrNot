import { Route, Routes } from "react-router";
import MainPage from "./pages/homePage/MainPage";
import MaleGamePage from "./pages/gamePages/gamePage/GamePage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<MainPage />} />
      <Route path="vote-for-anime-characters" element={<MaleGamePage />} />
    </Routes>
  );
};

export default MainRoutes;
