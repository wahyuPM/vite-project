import React, { Fragment } from "react";

import Header from "@/parts/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Sitemap from "@/parts/Sitemap";
import Footer from "@/parts/Footer";
export default function HomePage() {
    return (
        <Fragment>
            <Header theme="black" position="realtive"></Header>
            <Breadcrumb list={[
                { url: '/', name: 'Home' },
                { url: 'categories/1221', name: 'Office Room' },
                { url: 'categories/1221/products/2422', name: 'Details' },
            ]} />

            <Sitemap></Sitemap>
            <Footer></Footer>
        </Fragment>
    );
}
