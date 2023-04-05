import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { contentData } from "./ContentData";
import Typography from "@material-ui/core/Typography";
import "./portfolioitemdetails.css";

function PortfolioItemDetails() {
  const navigate = useNavigate();
  const { itemId } = useParams();
  const selectedItem = contentData.find((item) => item.id === itemId);

  return (
    <div className="portfolio_item_details">
      <button className="back_button" onClick={() => navigate(-1)}>
        Back
      </button>
      <div className="portfolio_item_media">
        {selectedItem.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={selectedItem.title}
            className="portfolio_item_image"
          />
        ))}
        {selectedItem.videos && (
          <video
            src={selectedItem.videos}
            controls
            className="portfolio_item_video"
          />
        )}
      </div>
      <div className="portfolio_item_description">
        <Typography variant="h4" className="portfolio_item_title">
          {selectedItem.title}
        </Typography>
        <Typography variant="body 2" className="portfolio_item_text">
          {selectedItem.description}
        </Typography>
      </div>
    </div>
  );
}

export default PortfolioItemDetails;
