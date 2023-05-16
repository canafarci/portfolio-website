import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { contentData } from "./ContentData";
import PortfolioCards from "./PortfolioCards";
import { FaLinkedin, FaGithub, FaBehanceSquare } from "react-icons/fa";
import "../../index.css";
import "./portfolio.css";

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
    "Architectural Visualizations",
    "Mobile Apps",
    "Architectural Designs",
    "Other Design Work",
    "Other Development Work",
  ];

  const filteredContentData = contentData.filter(
    (item) =>
      value === 0 ||
      item.category.includes(tabs[value].toLowerCase().replace(/ /g, "_"))
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
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        height="100%"
      >
        <DialogContent>
          {/* Render the content of the selected item in the dialog */}
          {selectedItem && (
            <>
              <div className="socials">
                <h2>{selectedItem.title}</h2>
                {selectedItem.github_link && (
                  <a
                    href={selectedItem.github_link}
                    target="_blank"
                    className="button"
                  >
                    <FaGithub size={40} className="icon" />
                    <h4> Source Code</h4>
                  </a>
                )}
                {selectedItem.behance_link && (
                  <a
                    href={selectedItem.behance_link}
                    target="_blank"
                    className="button"
                  >
                    <FaBehanceSquare size={40} className="icon" />
                    <h4> Behance</h4>
                  </a>
                )}
              </div>
              <div className="row">
                <h4>Date: </h4>
                <p>{selectedItem.date}</p>
              </div>
              <div className="row">
                <h4>Skills: </h4>
                <p>{selectedItem.skills}</p>
              </div>
              <div className="row">
                <h4>Job Type: </h4>
                <p>{selectedItem.job_type}</p>
              </div>
              {selectedItem.role && (
                <div className="row">
                  <h4>Role: </h4>
                  <p>{selectedItem.role}</p>
                </div>
              )}
              {selectedItem.genre && (
                <div className="row">
                  <h4>Genre: </h4>
                  <p>{selectedItem.genre}</p>
                </div>
              )}

              <p>{selectedItem.description}</p>
              <p>{selectedItem.detailed_description}</p>
              {selectedItem.webGLUrl && (
                <div className="media">
                  <iframe
                    frameborder="0"
                    src={selectedItem.webGLUrl}
                    allowfullscreen="1"
                    width={selectedItem.webgl_width}
                    height={selectedItem.webgl_height}
                  ></iframe>
                </div>
              )}
              {selectedItem.videoUrl && (
                <div className="media">
                  <iframe
                    width="560"
                    height="315"
                    src={selectedItem.videoUrl}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
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
