import React from 'react'

export default function Suggestion() {
    return (
        <section className="bg-gray-100 px-4 py-16">
            <div className="container mx-auto">
                <div className="flex flex-start mb-4">
                    <h3 className="text-2xl capitalize font-semibold">complete your room <br className="" />with what we designed
                    </h3>
                </div>
                <div className="flex overflow-x-auto mb-4 -mx-3">
                    {/* <!-- Start : item 1 --> */}
                    <div className="px-3 w-full md:w-3/12 mb-4">
                        <div className="rounded-xl p-4 pb-8 relative bg-white w-max">
                            <div className="rounded-xl overflow-hidden card-shadow w-full h-48">
                                <img src="/images/content/chair-office-1.jpg" alt="chair 1"
                                    className="w-full h-full object-cover object-center" />
                            </div>
                            <h5 className="text-large font-semibold mt-4">Office Chair 2xl</h5>
                            <span className="">IDR 90.000</span>
                            <a href="details.html" className="stretched-link">
                                {/* <!-- fake children --> */}
                            </a>
                        </div>
                    </div>
                    {/* <!-- End : item 1 --> */}
                    {/* <!-- Start : item 2 --> */}
                    <div className="px-3 w-full md:w-3/12 mb-4">
                        <div className="rounded-xl p-4 pb-8 relative bg-white w-max">
                            <div className="rounded-xl overflow-hidden card-shadow w-full h-48">
                                <img src="/images/content/chair-office-2.jpg" alt="chair 2"
                                    className="w-full h-full object-cover object-center" />
                            </div>
                            <h5 className="text-large font-semibold mt-4">Office Chair 2xl</h5>
                            <span className="">IDR 90.000</span>
                            <a href="details.html" className="stretched-link">
                                {/* <!-- fake children --> */}
                            </a>
                        </div>
                    </div>
                    {/* <!-- End : item 2 --> */}
                    {/* <!-- Start : item 3 --> */}
                    <div className="px-3 w-full md:w-3/12 mb-4">
                        <div className="rounded-xl p-4 pb-8 relative bg-white w-max">
                            <div className="rounded-xl overflow-hidden card-shadow w-full h-48">
                                <img src="/images/content/chair-office-3.jpg" alt="chair 3"
                                    className="w-full h-full object-cover object-center" />
                            </div>
                            <h5 className="text-large font-semibold mt-4">Office Chair 2xl</h5>
                            <span className="">IDR 90.000</span>
                            <a href="details.html" className="stretched-link">
                                {/* <!-- fake children --> */}
                            </a>
                        </div>
                    </div>
                    {/* <!-- End : item 3 --> */}
                    {/* <!-- Start : item 4 --> */}
                    <div className="px-3 w-full md:w-3/12 mb-4">
                        <div className="rounded-xl p-4 pb-8 relative bg-white w-max">
                            <div className="rounded-xl overflow-hidden card-shadow w-full h-48">
                                <img src="/images/content/chair-office-4.jpg" alt="chair 4"
                                    className="w-full h-full object-cover object-center" />
                            </div>
                            <h5 className="text-large font-semibold mt-4">Office Chair 2xl</h5>
                            <span className="">IDR 90.000</span>
                            <a href="details.html" className="stretched-link">
                                {/* <!-- fake children --> */}
                            </a>
                        </div>
                    </div>
                    {/* <!-- End : item 4 --> */}
                </div>
            </div>
        </section>
    )
}
