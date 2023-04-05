import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import About from "../about/About";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
import Portfolio from "../portfolio/Portfolio";
import "./contenttabs.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className="tabpanel_container"
      {...other}
    >
      {value === index && <Box className="tab_right">{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function ContentTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="tab_container">
      <Box className="tab_left">
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Information Tabs"
        >
          <Tab label="About" {...a11yProps(0)} />
          <Tab label="Experience" {...a11yProps(1)} />
          <Tab label="Skills" {...a11yProps(2)} />
          <Tab label="Portfolio" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <div className="tab_right">
        <TabPanel value={value} index={0}>
          <About />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Experience />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Skills />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Portfolio />
        </TabPanel>
      </div>
    </Box>
  );
}
