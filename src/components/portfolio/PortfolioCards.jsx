function PortfolioCards({ items, onItemClick }) {
  return (
    <div className="portfolio_cards">
      {items.map((item, index) => (
        <div
          className="portfolio_card"
          key={index}
          onClick={() => onItemClick(item)}
        >
          <img
            src={item.image}
            alt={item.title}
            className="portfolio_card_image"
          />
          <div className="portfolio_card_details">
            <h1 variant="h5" className="portfolio_card_title">
              {item.title}
            </h1>
            <a variant="body 2" className="portfolio_card_text">
              {item.description}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PortfolioCards;
