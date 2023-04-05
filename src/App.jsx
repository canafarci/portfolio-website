import React, { useState } from "react";
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Home from "./components/Home/Home";
import PortfolioItemDetails from "./components/portfolio/PortfolioItemDetails";

export default function App() {
  const navigate = useNavigate();
  const [prevPageStyle, setPrevPageStyle] = useState(null);

  const handlePortfolioItemClick = (portfolioItemId) => {
    setPrevPageStyle({
      position: "absolute",
      transform: "translateX(-100%)",
      transition: "transform 0.3s ease-in-out",
    });
    navigate(`/portfolio/${portfolioItemId}`);
  };

  const handleBackButtonClick = () => {
    setPrevPageStyle(null);
    navigate(-1);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Home onItemClick={handlePortfolioItemClick} />}
      />
      <Route
        path="/portfolio-item-details"
        element={<PortfolioItemDetails />}
      />
    </Routes>
  );
}
