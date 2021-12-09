

import React from "react";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent"
import Footer from "./Components/Footer";
import Description from "./Components/Description";



export default function App() {
  return (
  <div className="whole-page">
        <Description  />
        <div className="container">
        <Header />
        <MainContent />
        <Footer />
      </div>
  </div>
    
  )
}