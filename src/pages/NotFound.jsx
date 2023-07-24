import React, { Fragment } from 'react'
import Header from "@/parts/Header";
import PageErrorMessage from '@/parts/PageErrorMessage';
import Sitemap from "@/parts/Sitemap";
import Footer from "@/parts/Footer";

export default function NotFound() {
    return (
        <Fragment>
            <Header theme="black"></Header>
            <PageErrorMessage />
            <Sitemap></Sitemap>
            <Footer></Footer>
        </Fragment>
    )
}
