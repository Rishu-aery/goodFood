import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Card from "../components/card.js";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>

      <div>
        <Card></Card>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
