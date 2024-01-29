// import { Manrope, Proza_Libre, Syne } from 'next/font/google'
import localFont from 'next/font/local';
import './globals.css'

const font = localFont({ src: './fonts/syne.ttf', weight: '400',
style: 'normal', })

// const myFont = Manrope({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'Inventig - digital agency',
  description: 'great agency',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-orange-500'>
      <body className={font.className}>{children}</body>
    </html>
  )
}
