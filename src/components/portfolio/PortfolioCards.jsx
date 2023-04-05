import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import PortfolioItemDetails from "./PortfolioItemDetails";
import "./portfoliocards.css";

function PortfolioCards(props) {
  const navigate = useNavigate();
  const { items } = props;
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  const handleLearnMoreClick = (item) => {
    setSelectedItem(item);
    navigate(`/portfolio-item-details/${item.id}`);
  };

  return (
    <div className="portfolio_cards">
      {items.map((item) => (
        <Card
          key={item.id}
          className="portfolio_card"
          onClick={() => handleItemClick(item)}
        >
          <CardContent>
            <img
              src={item.image}
              alt={item.title}
              className="portfolio_card_image"
            />
            <Typography gutterBottom variant="h5" component="h2">
              {item.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              className="portfolio_card_button"
              onClick={() => handleLearnMoreClick(item)}
            >
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
      <Dialog
        open={!!selectedItem}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
      >
        {selectedItem && (
          <>
            <PortfolioItemDetails
              item={selectedItem}
              handleClose={handleClose}
            />
          </>
        )}
      </Dialog>
    </div>
  );
}

export default PortfolioCards;
