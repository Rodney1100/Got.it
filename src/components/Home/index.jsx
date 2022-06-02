// everything needed to import
import React from "react";
import Slider from "../Slider";
import Categories from "../Categories";
import { Products } from "../Products";
import  NewsLetter  from "../NewsLetters";
import  Footer  from "../Footer";
import Nav from "../Nav";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
}
