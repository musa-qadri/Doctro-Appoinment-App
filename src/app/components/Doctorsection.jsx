'use client'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { categorioes, doctors } from "@/lib/data";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import {} from '@radix-ui/react-icon'



export default function Doctorsection({home})
 {
         
   const filter=home?doctors.slice(0,7):doctors

    return (

        <div className="container mx-auto my-10">
            <div className=" mx-auto flex justify-between">
                <h1 className="text-3xl font-semibold" >Doctor specializations</h1>
                    {
                      home ?( 
                      <Link href={'/doctors'}>
                      <Button>
                        See All
                      </Button>
                      </Link>):(
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="specializations" />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            
                            categorioes.map((categorioes) => (
                                <SelectItem key={categorioes} value={categorioes}>{categorioes}</SelectItem>
                            ))
                        }

                    </SelectContent>
                </Select>)
                }

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-9 ">
                {filter.map((doctor) => (
                    <Card key={doctor.name} className='bg-slate-300'>
                        <CardHeader className='flex flex-row bg-slate-400'>

                            <Avatar className='self-center h-10 w-10' >
                                     <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                             </Avatar>
                          <div className="pl-3">
                            <CardTitle>{doctor.name}</CardTitle>
                            <CardDescription>{doctor.categories}</CardDescription>
                          </div>
                        </CardHeader>
                      
                        <CardContent>
                                <div className="flex justify-between py-1">
                                    <h1 className="font-bold">Hospital</h1>
                                    <h1>{doctor.hospital}</h1>
                                </div>
                                <div className="flex justify-between py-1">
                                    <h1 className="font-bold">Gender</h1>
                                    <h1>{doctor.gender}</h1>
                                </div>
                                <div className="flex justify-between py-1">
                                    <h1 className="font-bold">Appoinment Time</h1>
                                    <h1>{doctor.appointmentTime}</h1>
                                </div>
                         </CardContent>

                         <CardFooter>
                            
                            
                            <Button>
                                Book Appoinment
                                
                            </Button>
                         </CardFooter>
                            
                    </Card>
                ))}
            </div>

        </div>


    );
}
