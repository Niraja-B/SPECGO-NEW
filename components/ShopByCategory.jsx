import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ShopByCategory.css";

const ShopByCategory = ({ openLogin }) => {
  const [activeCategory, setActiveCategory] = useState("Men");
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    if (localStorage.getItem('user')) {
      setActiveCategory(category);
      // Redirect based on the active category
      switch (category) {
        case "Men":
          navigate("/eyeglass-product");
          break;
        case "Women":
          navigate("/sunglass-product");
          break;
        case "Kids":
          navigate("/computer-glasses-product");
          break;
        default:
          break;
      }
    } else {
      openLogin(); // Show login popup if user is not logged in
    }
  };

  return (
    <div className="shop-by-category">
      <h2>Shop by Gender</h2>
      <div className="category-tabs">
        <div
          className={`category-box ${activeCategory === "Men" ? "active" : ""}`}
          onClick={() => handleCategoryClick("Men")}
        >
          <img src="https://www.specsmakers.in/cdn/shop/files/men_2.webp?v=1720251690&width=740" alt="Men" />
        </div>
        <div
          className={`category-box ${activeCategory === "Women" ? "active" : ""}`}
          onClick={() => handleCategoryClick("Women")}
        >
          <img src="https://www.specsmakers.in/cdn/shop/files/women_1.webp?v=1720251690&width=740" alt="Women" />
        </div>
        <div
          className={`category-box ${activeCategory === "Kids" ? "active" : ""}`}
          onClick={() => handleCategoryClick("Kids")}
        >
          <img src="https://www.specsmakers.in/cdn/shop/files/kid_3.webp?v=1720251690&width=740" alt="Kids" />
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
