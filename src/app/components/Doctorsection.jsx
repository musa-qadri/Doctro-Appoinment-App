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




export default function Doctorsection() {
    return (

        <div className="container mx-auto">
            <div className=" mx-auto flex justify-between">
                <h1 className="text-3xl font-semibold" >Doctor specializations</h1>

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
                </Select>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-9">
                {doctors.map((doctor) => (
                    <Card key={doctor.name}>
                        <CardHeader>
                            <CardTitle>{doctor.name}</CardTitle>
                            <CardDescription>{doctor.categories}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>

        </div>


    );
}
