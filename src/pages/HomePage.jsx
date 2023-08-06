import React, { Fragment } from "react";

import Header from "@/parts/Header";
import Hero from "@/parts/Hero";
import BrowseRoom from "@/parts/HomePage/BrowseRoom";
import JustArrived from "@/parts/HomePage/JustArrived";
import Clients from "@/parts/Clients";
import Sitemap from "@/parts/Sitemap";
import Footer from "@/parts/Footer";

import useScrollAnchor from "@/helpers/hooks/useScrollAnchor";
import useModalDOM from "@/helpers/hooks/useModalDOM";

export default function HomePage(props) {
  useScrollAnchor()
  useModalDOM()
  return (
    <Fragment>
      <Header theme="white" position="absolute"></Header>
      <Hero></Hero>
      <BrowseRoom></BrowseRoom>
      <JustArrived></JustArrived>
      <Clients></Clients>
      <Sitemap></Sitemap>
      <Footer></Footer>
    </Fragment>
  );
}
