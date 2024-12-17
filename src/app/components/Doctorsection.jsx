'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { categorioes } from "@/lib/data";


export default function Doctorsection() {
  return (
    
      
      <div className="container mx-auto flex justify-between">
        <h1 className="text-3xl font-semibold" >Doctor specializations</h1>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="specializations" />
          </SelectTrigger>
          <SelectContent>
            {
              
              categorioes.map((categorioes)=>(
              <SelectItem key={categorioes} value={categorioes}>{categorioes}</SelectItem>
            ))
            }
            
          </SelectContent>
        </Select>

      </div>

   
  );
}
