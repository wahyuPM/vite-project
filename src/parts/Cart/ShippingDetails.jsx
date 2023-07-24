import React from 'react'

export default function ShippingDetails() {
    return (
        <div className="w-full md:px-4 md:w-4/12" id="shipping-detail">
            <div className="bg-gray-100 px-4 py-6 md:p-8 md:rounded-3xl">
                <form action="success.html">
                    <div className="flex flex-start mb-6">
                        <h3 className="text-2xl">Shipping Details</h3>
                    </div>
                    {/* <!-- Start: Input Complate Name --> */}
                    <div className="flex flex-col mb-4">
                        <label for="complate-name" className="text-sm mb-2">Complate Name</label>
                        <input data-input type="text" id="complate-name"
                            className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                            placeholder="Input your name" />
                    </div>
                    {/* <!-- End: Input Complate Name --> */}
                    {/* <!-- Start: Input Complate Email --> */}
                    <div className="flex flex-col mb-4">
                        <label for="email-address" className="text-sm mb-2">Email Address</label>
                        <input data-input type="email" id="email-address"
                            className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                            placeholder="Input your email address" />
                    </div>
                    {/* <!-- End: Input Complate Email --> */}
                    {/* <!-- Start: Input Complate Address --> */}
                    <div className="flex flex-col mb-4">
                        <label for="address" className="text-sm mb-2">Address</label>
                        <input data-input type="text" id="address"
                            className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                            placeholder="Input your address" />
                    </div>
                    {/* <!-- End: Input Complate Address --> */}
                    {/* <!-- Start: Input Phone number --> */}
                    <div className="flex flex-col mb-4">
                        <label for="phone-number" className="text-sm mb-2">Phone Number</label>
                        <input data-input type="tel" id="phone-number"
                            className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                            placeholder="Input your phone number" />
                    </div>
                    {/* <!-- End: Input Phone number --> */}
                    {/* <!-- Start: Choose Courier --> */}
                    <div className="flex flex-col mb-4">
                        <label className="text-sm mb-2">Choose courier</label>
                        <div className="flex -mx-2 flex-wrap">
                            {/* <!-- Start: Courier 1 --> */}
                            <div className="px-2 w-6/12 h-24 mb-4">
                                <button data-value="fedex" data-name="courier" type="button"
                                    className="border-2 boder-gray-200 focus:outline-none focus:border-red-100 flex items-center justify-center rounded-xl bg-white w-full h-full">
                                    <img src="/images/content/courier/logo-fedex.png" alt="fedex"
                                        className="object-contain max-h-full" />
                                </button>
                            </div>
                            {/* <!-- End: Courier 1 --> */}
                            {/* <!-- Start: Courier 2 --> */}
                            <div className="px-2 w-6/12 h-24 mb-4">
                                <button data-value="dhl" data-name="courier" type="button"
                                    className="border-2 boder-gray-200 focus:outline-none focus:border-red-100 flex items-center justify-center rounded-xl bg-white w-full h-full">
                                    <img src="/images/content/courier/logo-dhl.png" alt="dhl"
                                        className="object-contain max-h-full" />
                                </button>
                            </div>
                            {/* <!-- End: Courier 2 --> */}
                        </div>
                    </div>
                    {/* <!-- End: Choose Courier --> */}
                    {/* <!-- Start: Choose Payment --> */}
                    <div className="flex flex-col mb-4">
                        <label className="text-sm mb-2">Choose courier</label>
                        <div className="flex -mx-2 flex-wrap">
                            {/* <!-- Start: Payment 1 --> */}
                            <div className="px-2 w-6/12 h-24 mb-4">
                                <button data-value="midtrans" data-name="payment" type="button"
                                    className="border-2 boder-gray-200 focus:outline-none focus:border-red-100 flex items-center justify-center rounded-xl bg-white w-full h-full">
                                    <img src="/images/content/payment/logo-midtrans.png" alt="midtrans"
                                        className="object-contain max-h-full" />
                                </button>
                            </div>
                            {/* <!-- End: Payment 1 --> */}
                            {/* <!-- Start: Payment 2 --> */}
                            <div className="px-2 w-6/12 h-24 mb-4">
                                <button data-value="mastercard" data-name="payment" type="button"
                                    className="border-2 boder-gray-200 focus:outline-none focus:border-red-100 flex items-center justify-center rounded-xl bg-white w-full h-full">
                                    <img src="/images/content/payment/logo-mastercard.png" alt="mastercard"
                                        className="object-contain max-h-full" />
                                </button>
                            </div>
                            {/* <!-- End: Payment 2 --> */}
                            {/* <!-- Start: Payment 3 --> */}
                            <div className="px-2 w-6/12 h-24 mb-4">
                                <button data-value="bitcoin" data-name="payment" type="button"
                                    className="border-2 boder-gray-200 focus:outline-none focus:border-red-100 flex items-center justify-center rounded-xl bg-white w-full h-full">
                                    <img src="/images/content/payment/logo-bitcoin.png" alt="bitcoin"
                                        className="object-contain max-h-full" />
                                </button>
                            </div>
                            {/* <!-- End: Payment 3 --> */}
                            {/* <!-- Start: Payment 4 --> */}
                            <div className="px-2 w-6/12 h-24 mb-4">
                                <button data-value="american-express" data-name="payment" type="button"
                                    className="border-2 boder-gray-200 focus:outline-none focus:border-red-100 flex items-center justify-center rounded-xl bg-white w-full h-full">
                                    <img src="/images/content/payment/logo-american-express.png"
                                        alt="american-express" className="object-contain max-h-full" />
                                </button>
                            </div>
                            {/* <!-- End: Payment 4 --> */}
                        </div>
                    </div>
                    {/* <!-- End: Choose Payment --> */}

                    <div className="text-center">
                        <button type="submit" disabled
                            className="bg-pink-400 text-black focus:bg-black focus:outline-none w-full py-3 rounded-full text-lg focus:text-pink-400 transition-all duration-200 px-6">
                            Checkout Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
