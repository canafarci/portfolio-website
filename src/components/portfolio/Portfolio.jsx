import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import "./portfolio.css";
import { contentData } from "./ContentData";
import PortfolioCards from "./PortfolioCards";

export default function Portfolio() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
      value === 0 ||
      item.category === tabs[value].toLowerCase().replace(/ /g, "_")
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Portfolio Tabs"
        sx={{
          borderBottom: "1px solid black",
        }}
        className="tabs_holder"
        variant="scrollable"
        scrollButtons="auto"
      >
        {tabs.map((tab, index) => (
          <Tab className="tab-item" key={index} label={tab} />
        ))}
      </Tabs>
      <div className="portfolio_cards_container">
        {filteredContentData.map((item, index) => (
          <PortfolioCards
            key={index}
            item={item}
            onCardClick={handleCardClick}
          />
        ))}
      </div>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogContent>
          {/* Render the content of the selected item in the dialog */}
          {selectedItem && (
            <>
              <h2>{selectedItem.title}</h2>
              <p>{selectedItem.description}</p>
              <p>{selectedItem.detailed_description}</p>
              {selectedItem.webGLUrl && (
                <iframe
                  frameborder="0"
                  src={selectedItem.webGLUrl}
                  allowfullscreen="1"
                  width={selectedItem.webgl_width}
                  height={selectedItem.webgl_height}
                ></iframe>
              )}
              {selectedItem.videoUrl && (
                <iframe
                  width="560"
                  height="315"
                  src={selectedItem.videoUrl}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}

              {selectedItem.images &&
                selectedItem.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${selectedItem.title} ${index}`}
                    className="portfolio_image"
                  />
                ))}
              {/* Render any other content you want to show in the dialog */}
            </>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
