import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const PortfolioCards = ({ item, onCardClick }) => {
  return (
    <Card
      onClick={() => onCardClick(item)}
      style={{ width: "300px", height: "300px", borderRadius: "1vw" }}
      className="card_shadow"
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt={item.title}
          height="180"
          image={item.image}
          title={item.title}
          referrerPolicy="no-referrer"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PortfolioCards;
