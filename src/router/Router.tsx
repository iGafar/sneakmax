import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { BasketPage, CardPage, MainPage } from "../pages";

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/basket" element={<BasketPage />} />
      <Route path="/card" element={<CardPage />} />
    </Routes>
  );
};

export default Router;
