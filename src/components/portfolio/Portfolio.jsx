import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./portfolio.css";
import { contentData } from "./ContentData";
import PortfolioCards from "./PortfolioCards";
import { useNavigate } from "react-router-dom";

function a11yProps(index) {
  return {
    id: `horizontal-tab-${index}`,
    "aria-controls": `horizontal-tabpanel-${index}`,
  };
}

export default function Portfolio() {
  const navigate = useNavigate();

  const [value, setValue] = React.useState(0);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelectedItem(null); // reset selectedItem state when changing tabs
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    navigate(`/portfolio/${item.id}`); // navigate to new route with item id
  };

  const handleBackClick = () => {
    setSelectedItem(null);
  };

  const tabs = [
    "All",
    "Mobile Games",
    "PC Games",
    "Multiplayer Games",
    "Architectural Visualizations",
    "Mobile Apps",
    "Architectural Designs",
    "Other Design Work",
    "Other Development Work",
  ];

  const filteredContentData = contentData.filter(
    (item) =>
      value === 0 || // Show all items for the "All" tab
      item.category === // Show items with matching category
        tabs[value].toLowerCase().replace(/ /g, "_") // Convert tab label to category name
  );

  return (
    <Box className="tab_container">
      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Portfolio Tabs"
          sx={{
            borderBottom: "1px solid black",
          }}
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabs.map((tab, index) => (
            <Tab
              className="tab-item"
              key={index}
              label={tab}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
        <div className="portfolio_cards_container">
          <PortfolioCards
            items={filteredContentData}
            onItemClick={handleItemClick}
          />
        </div>
      </div>
      {selectedItem && (
        <div className="portfolio_item_container">
          <button className="back_button" onClick={handleBackClick}>
            Back
          </button>
          <div className="portfolio_item_details">
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="portfolio_item_image"
            />
            <div className="portfolio_item_description">
              <Typography variant="h4" className="portfolio_item_title">
                {selectedItem.title}
              </Typography>
              <Typography variant="body2" className="portfolio_item_text">
                {selectedItem.description}
              </Typography>
              <a
                href={selectedItem.details}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio_item_link"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      )}
    </Box>
  );
}
