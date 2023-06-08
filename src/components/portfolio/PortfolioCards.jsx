import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const PortfolioCards = ({ item, onCardClick }) => {
  return (
    <Card
      onClick={() => onCardClick(item)}
      style={{ width: "300px", height: "300px", borderRadius: "20px" }}
      variant="outlined"
      className="portfolio_card"
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt={item.title}
          height="240"
          image={item.image}
          title={item.title}
          referrerPolicy="no-referrer"
        />
        <CardContent>
          <div className="card_text">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PortfolioCards;
