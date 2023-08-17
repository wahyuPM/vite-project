import React, { Fragment, useEffect } from "react";

import { useParams } from 'react-router-dom'

import useAsync from "@/helpers/hooks/useAsync";
import fetch from "@/helpers/fetch";

import Header from "@/parts/Header";
import Breadcrumb from "@/components/Breadcrumb";
import ProductDetails from "@/parts/Details/ProductDetails";
import Suggestion from "@/parts/Details/Suggestion";
import Sitemap from "@/parts/Sitemap";
import Footer from "@/parts/Footer";

export default function HomePage() {
    const { idp } = useParams()
    const { data, status, error, run, isLoading } = useAsync()

    useEffect(() => {
        run(
            fetch({ url: `/api/products/${idp}` })
        )
    }, [run]);

    return (
        <Fragment>
            <Header theme="black" position="realtive"></Header>
            <Breadcrumb list={[
                { url: '/', name: 'Home' },
                { url: 'categories/1221', name: 'Office Room' },
                { url: 'categories/1221/products/2422', name: 'Details' },
            ]} />
            {isLoading ? "Loading" : <ProductDetails data={data} />}
            {isLoading ? "Loading" : <Suggestion data={data?.relatedProducts || {}} />}

            <Sitemap></Sitemap>
            <Footer></Footer>
        </Fragment>
    );
}
