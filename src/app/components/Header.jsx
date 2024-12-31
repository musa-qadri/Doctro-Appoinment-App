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
import { Button } from '@/components/ui/button';

export default function Header() {
    const session = null;
    return (
        <div className='bg-secondary '>
            <div className='flex justify-between container mx-auto p-3 '>
                <h1 className='font-mono text-xl font-bold'>
                    logo
                </h1>
                {
                    session?(

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
                    ):(
                                           
                    <Button varient={'outline'} >login</Button>
                       
                )}


            </div>
        </div>
    )
}
