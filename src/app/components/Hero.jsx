'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-3/4 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-1xl mb-4 font-medium text-gray-900">
                            Doctor Appoinment System
                            <br className="hidden lg:inline-block" />
                            By Batch-11
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
                            plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
                            tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
                            chambray.
                        </p>
                        <div className=" flex gap-6 justify-center">
                          <Button>button</Button>
                          <Button>button</Button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-end" >
                        <Image
                        height={300}
                        width={300}
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="https://static.vecteezy.com/system/resources/thumbnails/041/409/059/small_2x/ai-generated-a-female-doctor-with-a-stethoscope-isolated-on-transparent-background-free-png.png"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
