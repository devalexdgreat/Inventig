import Image from "next/image";
import Link from "next/link";
import Logo from '@/public/logo.png';
import LogoDark from '@/public/logo-dark.png';

export default function Footer() {
    return (
        <div className="w-full pt-24 bg-orange-500 text-white" id="contact">
            <div className="w-11/12 mx-auto">
                <div className="w-full md:w-7/12 mb-16">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        Starting a new project or want to collaborate with us?
                        <Link href={"mailto:alex_dgreat001@protonmail.com"} className="border-2 border-black rounded-full 
                        py-0.5 px-3 text-2xl md:text-4xl text-black hover:bg-black 
                        hover:text-white duration-700 ms-1">Let&rsquo;s Talk</Link>
                    </h1>
                </div>
                <div className="border-t border-black py-8 text-black 
                flex flex-col md:flex-row items-start justify-between gap-8">
                    <Link href={'/'} className=""><Image src={LogoDark} className="h-9 w-32" alt=""/></Link>
                    <div className="flex flex-col">
                        <div className="flex gap-8">
                            <Link href={'/'} className="hover:text-white duration-700">Instagram</Link>
                            <Link href={'/'} className="hover:text-white duration-700">Facebook</Link>
                            <Link href={'/'} className="hover:text-white duration-700">Twitter</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}