import React from 'react'
import { Link } from 'react-router-dom'

export default function Suggestion({ data }) {
    return (
        <section className="bg-gray-100 px-4 py-16">
            <div className="container mx-auto">
                <div className="flex flex-start mb-4">
                    <h3 className="text-2xl capitalize font-semibold">complete your room <br className="" />with what we designed
                    </h3>
                </div>
                <div className="flex overflow-x-auto mb-4 -mx-3">
                    {/* <!-- Start : item 1 --> */}
                    {data?.map(item => {
                        return <div className="px-3 w-full md:w-3/12 mb-4" key={item.id}>
                            <div className="rounded-xl p-4 pb-8 relative bg-white w-max">
                                <div className="rounded-xl overflow-hidden card-shadow w-full h-48">
                                    <img src={item.imageUrl} alt={item.imageUrl}
                                        className="w-full h-full object-cover object-center" />
                                </div>
                                <h5 className="text-large font-semibold mt-4">{item.title}</h5>
                                <span className="">IDR {item.price}</span>
                                <Link to={`/categories/${item.idc}/products/${item.id}`} className="stretched-link">
                                    {/* <!-- fake children --> */}
                                </Link>
                            </div>
                        </div>
                    })}
                    {/* <!-- End : item 1 --> */}

                </div>
            </div>
        </section>
    )
}
