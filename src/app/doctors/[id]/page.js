import { Datepicker } from "@/app/components/Datepicker";
import { Button } from "@/components/ui/button";
import { doctors } from "@/lib/data";
import Image from "next/image";


export default function DoctorsDetails({ params }) {

     const doctorInfo= doctors.find((doctor)=>doctor.id == params.id)
    console.log(params , 'musaaaa')


    return (
        <div className="min-h-screen">

            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container  py-5 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">

                     <div className="lg:w-1/2 relative w-full lg:h-auto h-56 object-cover object-center rounded">
                        <Image
                        
                        fill={true}

                            alt="ecommerce"
                            src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9jdG9yfGVufDB8fDB8fHww"
                                                 
                        />
                                 
                     </div>
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                {doctorInfo.categories}
                            </h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                {doctorInfo.name}
                            </h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                    <a className="text-gray-500">
                                        <svg
                                            fill="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg
                                            fill="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg
                                            fill="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <p className="leading-relaxed">
                                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps
                                cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine
                                tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean
                                shorts keytar banjo tattooed umami cardigan.
                            </p>
                            {/* <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex">
                                    <span className="mr-3">Color</span>
                                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                                    <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
                                </div>
                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Size</span>
                                    <div className="relative">
                                        <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                            <option>SM</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                        </select>
                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                className="w-4 h-4"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div> */}
                            <hr/>
                            
                            <div className="">
                            <div className="flex justify-between py-1 ">
                                    <h1 className="font-bold">Hospital</h1>
                                    <h1>{doctorInfo.hospital}</h1>
                                </div>
                                <div className="flex justify-between py-1">
                                    <h1 className="font-bold">Gender</h1>
                                    <h1>{doctorInfo.gender}</h1>
                                </div>
                                <div className="flex justify-between py-1">
                                    <h1 className="font-bold">Appoinment Time</h1>
                                    <h1>{doctorInfo.appointmentTime}</h1>
                                </div>
                                <div className="flex justify-between py-1">
                                    <h1 className="font-bold">Fees</h1>
                                    <h1>${ doctorInfo.fees}</h1>
                                </div>
                            </div>
                            <Datepicker/>
                        <Button className='my-4 w-full'>Book your Appoinment</Button>
                        </div>
                          
                    </div>
                </div>
            </section>

        </div>
    )
}
