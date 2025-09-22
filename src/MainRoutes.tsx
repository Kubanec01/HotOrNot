import { Route, Routes } from "react-router";
import MainPage from "./pages/homePage/MainPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<MainPage />} />
    </Routes>
  );
};

export default MainRoutes;
