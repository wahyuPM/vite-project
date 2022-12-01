import React, { Fragment } from "react";

import Header from "@/parts/Header";
import Hero from "@/parts/Hero";
import BrowseRoom from "@/parts/HomePage/BrowseRoom";
import JustArrived from "@/parts/HomePage/JustArrived";
import Clients from "@/parts/Clients";
import Sitemap from "@/parts/Sitemap";
export default function HomePage(props) {
  return (
    <Fragment>
      <Header></Header>
      <Hero></Hero>
      <BrowseRoom></BrowseRoom>
      <JustArrived></JustArrived>
      <Clients></Clients>
      <Sitemap></Sitemap>
    </Fragment>
  );
}
