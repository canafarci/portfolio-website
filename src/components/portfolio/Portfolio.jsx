import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { contentData } from "./ContentData";
import PortfolioCards from "./PortfolioCards";
import "../../index.css";
import "./portfolio.css";
import "./portfoliocards.css";
import ItemDialog from "./ItemDialog";

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
    "Architectural Designs",
    "Academic Work",
    "Mobile Apps",
    "Other Work",
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
          marginLeft: "1vw",
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
        className="fullHeight"
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
      >
        <DialogContent className="dialog_content">
          {selectedItem && <ItemDialog selectedItem={selectedItem} />}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
