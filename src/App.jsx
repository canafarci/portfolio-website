import React from "react";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import ContentTabs from "./components/tabs/ContentTabs";

const App = () => {
  return (
    <>
      <Header />
      <ContentTabs />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
