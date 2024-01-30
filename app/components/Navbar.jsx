"use client";
import Link from "next/link";
import Logo from '@/public/logo.png';
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {

    const [open, setOpen] = useState(false);
    // const [openedStyle, setOpenedStyle] = useState(0.95);

    const toggleMenu = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <div className="w-full fixed bg-white z-10">
            <div className="w-11/12 mx-auto flex justify-between items-center py-6">
                <Link href={'/'} className="font-bold"><Image src={Logo} className="h-12 w-32" alt=""/></Link>
                <div className="md:flex gap-12 items-center hidden">
                    <Link href={'#about-us'} className="hover:text-orange-600">About Us</Link>
                    <Link href={'#services'} className="hover:text-orange-600">Services</Link>
                    <Link href={'#contact'} className="bg-orange-600 hover:bg-orange-500 
                    text-white rounded-full py-1 px-3 duration-700">
                        Contact Us
                    </Link>
                </div>
                <button onClick={toggleMenu} className="border border-orange-600 text-orange-600 rounded-full 
                px-3 py-1 hover:bg-orange-600 hover:text-white md:hidden">Menu</button>
            </div>

            {open && (
                <div className="block md:hidden bg-white h-screen fixed top-0 z-40 w-full">
                    <div className="w-11/12 mx-auto flex justify-between items-center py-6 border-b">
                        <Link href={'/'} className="font-bold"><Image src={Logo} className="h-12 w-32" alt=""/></Link>
                        
                        <button onClick={toggleMenu} className="border border-orange-600 text-orange-600 rounded-full 
                        px-4 py-1 hover:bg-orange-600 hover:text-white md:hidden">Close</button>
                    </div>

                    <div className="flex flex-col md:hidden w-11/12 mx-auto">
                        <Link href={'#about-us'} onClick={toggleMenu} className="hover:text-orange-600 py-6 border-b">About Us</Link>
                        <Link href={'#services'} onClick={toggleMenu} className="hover:text-orange-600 py-6 border-b">Services</Link>
                        <Link href={'#contact'} onClick={toggleMenu} className="bg-orange-600 hover:bg-orange-500 
                        text-white rounded-full mt-6 py-2 w-[110px] flex items-center text-center justify-center duration-700">
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}