import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import { useNavigate } from "react-router-dom";

function PortfolioCards(props) {
  const navigate = useNavigate();
  const { items, onItemClick } = props;

  return (
    <div className="portfolio_cards">
      {items.map((item) => (
        <Card
          onClick={() => {
            navigate("/portfolio-item-details");
          }}
          key={item.id}
          className="portfolio_card"
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
            <Link
              to={`/portfolio-item-details`}
              className="portfolio_card_button"
              onClick={() => onItemClick(item)}
            >
              Learn More
            </Link>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default PortfolioCards;
