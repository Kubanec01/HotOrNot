import { Route, Routes } from "react-router";
import MainPage from "./pages/homePage/MainPage";
import MaleGamePage from "./pages/gamePages/maleGamePage/MaleGamePage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<MainPage />} />
      <Route path="vote-for-man-game" element={<MaleGamePage />} />
    </Routes>
  );
};

export default MainRoutes;
