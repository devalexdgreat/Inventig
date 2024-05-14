// import { Manrope, Proza_Libre, Syne } from 'next/font/google'
import localFont from 'next/font/local';
import './globals.css'

const font = localFont({ src: './fonts/syne.ttf', weight: '400',
style: 'normal', })

// const myFont = Manrope({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'Inventig - Digital Agency | Web Development & Design',
  description: 'Inventig is a leading digital agency specializing in web development and design. We create stunning websites and digital experiences tailored to your needs.',
  keywords: 'digital agency, web development, web design, custom websites, responsive design, SEO',
  author: 'Inventig Ltd.',
  image: '/logo.png', // URL to your Open Graph image
  url: 'https://inventig.vercel.app', // URL of the current page
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-orange-500'>
      <body className={font.className}>{children}</body>
    </html>
  )
}
