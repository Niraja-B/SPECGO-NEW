import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Collection.css";

const Collection = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const categories = [
    { image: "//www.specsmakers.in/cdn/shop/files/eyeglass.webp?v=1722835067&amp", text: "Eyeglasses", path: "/eyeglass-product" },
    { image: "//www.specsmakers.in/cdn/shop/files/computer_glass_3.webp?v=1722835067&amp", text: "Sunglasses", path: "/sunglass-product" },
    { image: "//www.specsmakers.in/cdn/shop/files/Computer_glass_1_4fd12353-8981-4e96-ab06-bc8c520a6c84.webp?v=1722835066&amp", text: "Computer Glasses", path: "/computer-glasses-product" },
    { image: "//www.specsmakers.in/cdn/shop/files/reading_glass.webp?v=1722835066&amp", text: "Reading Glasses", path: "/reading-glasses-product" },
    { image: "//www.specsmakers.in/cdn/shop/files/contact_lens.webp?v=1722835067&amp;width=1024", text: "Contact Lenses", path: "/contact-lenses-product" },
    { image: "//www.specsmakers.in/cdn/shop/files/accessories_5.webp?v=1722835067&amp", text: "Accessories", path: "/accessories-product" },
  ];

  return (
    <div className="collection-container">
      <h2 className="collection-heading">Our Collections</h2>
      <div className="collection">
        {categories.map((category, index) => (
          <div
            key={index}
            className="collection-box"
            onClick={() => handleNavigation(category.path)}
          >
            <img src={category.image} alt={category.text} />
            <span>{category.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
