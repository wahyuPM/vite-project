import React from 'react'

export default function ShoppingCart() {
    return (
        <div className="w-full px-4 mb-4 md:w-8/12 md:mb-0" id="shopping-cart">
            <div className="flex flex-start mb-4 mt-8 pb-3 border-b border-gray-200 md:border-b-0">
                <h3 className="text-2xl">Shopping Cart</h3>
            </div>
            {/* <!-- Start: Table Tittle --> */}
            <div className="border-b border-gray-200 mb-4 hidden md:block">

                <div className="flex flex-start items-center pb-2 -mx-4">
                    <div className="px-4 flex-none">
                        <div className="" style={{ width: 90 }}>
                            <h6>Photo</h6>
                        </div>
                    </div>
                    <div className="px-4 w-5/12">
                        <div className="">
                            <h6>Product</h6>
                        </div>
                    </div>
                    <div className="px-4 w-5/12">
                        <div className="">
                            <h6>Price</h6>
                        </div>
                    </div>
                    <div className="px-4 w-2/12">
                        <div className="text-center">
                            <h6>Action</h6>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End: Table Tittle --> */}

            {/* <!-- Start: Cart Empty Wrapper --> */}
            <p id="cart-empty" className="hidden text-center py-8">
                Ooops... Cart is empty <a href="details.html" className="underline">Shop Now!</a>
            </p>
            {/* <!-- End: Cart Empty Wrapper --> */}

            {/* <!-- Start: Table Item 1 --> */}
            <div className="flex flex-start flex-wrap items-center mb-4 -mx-4" data-row="1">
                <div className="px-4 flex-none">
                    <div className="" style={{ width: 90, height: 90 }}>
                        <img src="/images/content/chair-office-1.jpg" alt="chair office 1"
                            className="object-cover rounded-xl w-full h-full" />
                    </div>
                </div>
                <div className="px-4 w-auto md:w-5/12 flex-1">
                    <div className="">
                        <h6 className="text-semibold text-lg md:text-xl leading-8">
                            Saman Kakka
                        </h6>
                        <span className="text-small md:text-lg">Office Room</span>
                        <h6 className="semi-bold text-base md:text-lg block md:hidden">
                            IDR 28.000.000
                        </h6>
                    </div>
                </div>
                <div className="px-4 w-auto md:w-5/12 flex-none md:flex-1 hidden md:block">
                    <div className="">
                        <h6 className="semi-bold text-base block">
                            IDR 28.000.000
                        </h6>
                    </div>
                </div>
                <div className="px-4 w-2/12">
                    <div className="text-center">
                        <button data-delete-item="1"
                            className="text-red-600 border-none focus:outline-none px-3 py-1">X</button>
                    </div>
                </div>
            </div>
            {/* <!-- End: Table Item 1 --> */}
            {/* <!-- Start: Table Item 2 --> */}
            <div className="flex flex-start flex-wrap items-center mb-4 -mx-4" data-row="2">
                <div className="px-4 flex-none">
                    <div className="" style={{ width: 90, height: 90 }}>
                        <img src="/images/content/chair-office-2.jpg" alt="chair office 2"
                            className="object-cover rounded-xl w-full h-full" />
                    </div>
                </div>
                <div className="px-4 w-auto md:w-5/12 flex-1">
                    <div className="">
                        <h6 className="text-semibold text-lg md:text-xl leading-8">
                            Green Seat
                        </h6>
                        <span className="text-small md:text-lg">Office Room</span>
                        <h6 className="semi-bold text-base md:text-lg block md:hidden">
                            IDR 12.000.000
                        </h6>
                    </div>
                </div>
                <div className="px-4 w-auto md:w-5/12 flex-none md:flex-1 hidden md:block">
                    <div className="">
                        <h6 className="semi-bold text-base block">
                            IDR 12.000.000
                        </h6>
                    </div>
                </div>
                <div className="px-4 w-2/12">
                    <div className="text-center">
                        <button data-delete-item="2"
                            className="text-red-600 border-none focus:outline-none px-3 py-1">X</button>
                    </div>
                </div>
            </div>
            {/* <!-- End: Table Item 2 --> */}
            {/* <!-- Start: Table Item 3 --> */}
            <div className="flex flex-start flex-wrap items-center mb-4 -mx-4" data-row="3">
                <div className="px-4 flex-none">
                    <div className="" style={{ width: 90, height: 90 }}>
                        <img src="/images/content/chair-office-3.jpg" alt="chair office 3"
                            className="object-cover rounded-xl w-full h-full" />
                    </div>
                </div>
                <div className="px-4 w-auto md:w-5/12 flex-1">
                    <div className="">
                        <h6 className="text-semibold text-lg md:text-xl leading-8">
                            Pacific
                        </h6>
                        <span className="text-small md:text-lg">Office Room</span>
                        <h6 className="semi-bold text-base md:text-lg block md:hidden">
                            IDR 88.000.000
                        </h6>
                    </div>
                </div>
                <div className="px-4 w-auto md:w-5/12 flex-none md:flex-1 hidden md:block">
                    <div className="">
                        <h6 className="semi-bold text-base block">
                            IDR 88.000.000
                        </h6>
                    </div>
                </div>
                <div className="px-4 w-2/12">
                    <div className="text-center">
                        <button data-delete-item="3"
                            className="text-red-600 border-none focus:outline-none px-3 py-1">X</button>
                    </div>
                </div>
            </div>
            {/* <!-- End: Table Item 3--> */}
        </div>
    )
}
