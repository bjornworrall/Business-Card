

import React from "react";
import SideInfo from "./Components/Side-info";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent"
import Footer from "./Components/Footer"



export default function App() {
  return (

    <div className="whole-page">
            <SideInfo />
       <div className="container">
           
            <Header />
            <MainContent />
            <Footer />
       </div>
    </div>
   
  )
}