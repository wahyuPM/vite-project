import React, { Fragment } from 'react'
import Header from "@/parts/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Sitemap from "@/parts/Sitemap";
import Footer from "@/parts/Footer";
import Document from '@/parts/Document';

import ShoppingCart from '@/parts/Cart/ShoppingCart';
import ShippingDetails from '@/parts/Cart/ShippingDetails';

export default function Cart() {
    return (
        <Document>
            <Header theme="black" position="realtive"></Header>
            <Breadcrumb list={[
                { url: '/', name: 'Home' },
                { url: '/cart', name: 'Shopping Cart' },
            ]} />
            <section className="md:py-16">
                <div className="container mx-auto px-4">
                    <div className="flex -mx-4 flex-wrap">
                        <ShoppingCart />
                        <ShippingDetails />
                    </div>
                </div>
            </section>
            <Sitemap />
            <Footer />
        </Document>
    )
}
