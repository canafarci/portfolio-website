import React from "react";
import Typography from "@material-ui/core/Typography";
import "./portfolioitemdetails.css";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

function PortfolioItemDetails({ item, handleClose }) {
  return (
    <div className="portfolio_item_details">
      <DialogTitle>{item.title}</DialogTitle>
      <DialogContent>
        <img
          src={item.image}
          alt={item.title}
          className="portfolio_item_image"
        />
        <Typography variant="body2" className="portfolio_item_text">
          {item.description}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
        <a
          href={item.details}
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio_item_link"
        >
          View Details
        </a>
      </DialogActions>
    </div>
  );
}

export default PortfolioItemDetails;
