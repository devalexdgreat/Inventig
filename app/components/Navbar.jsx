import Link from "next/link";
import Logo from '@/public/logo.png';
import Image from "next/image";

export default function Navbar() {
    return (
        <div className="w-full">
            <div className="w-11/12 mx-auto flex justify-between items-center py-6">
                <Link href={'/'} className="font-bold"><Image src={Logo} className="h-12 w-32" alt=""/></Link>
                <div className="md:flex gap-12 items-center hidden">
                    <Link href={'#about-us'} className="hover:text-orange-600">About Us</Link>
                    <Link href={'#services'} className="hover:text-orange-600">Services</Link>
                    <Link href={'#contact'} className="bg-orange-600 hover:bg-orange-500 
                    text-white rounded-full py-1 px-3 duration-700">
                        Let&rsquo;s Work
                    </Link>
                </div>
                <Link href={'#contact'} className="border border-orange-600 text-orange-600 rounded-full 
                px-3 py-1 hover:bg-orange-600 hover:text-white md:hidden">Let&rsquo;s Work</Link>
            </div>
        </div>
    );
}