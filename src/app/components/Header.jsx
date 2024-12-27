import React from 'react'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'





export default function Header() {
    return (
        <div className='bg-secondary '>
            <div className='flex justify-between container mx-auto p-3 '>
                <h1 className='font-mono text-xl font-bold'>
                    logo
                </h1>
                <Menubar className='bg-secondary border-none' >
                    <MenubarMenu >
                        <MenubarTrigger className='bg-secondary'>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>

                        </MenubarTrigger>
                        <MenubarContent>
                            <Link href={'/appoinment'}><MenubarItem>Profile</MenubarItem></Link>
                            
                            <MenubarSeparator />
                            <Link href={'/profile'}><MenubarItem>See Details</MenubarItem></Link>
                            
                            <MenubarSeparator />
                            <MenubarItem>Logout </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>


            </div>
        </div>
    )
}
