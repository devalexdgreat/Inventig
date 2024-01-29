import Image from 'next/image'
import Navbar from './components/Navbar'
import Link from 'next/link'
import pjx1 from '@/public/project1.jpg';
import pjx4 from '@/public/project4.jpg';
import flash from '@/public/flash.svg';
import pinpoint from '@/public/pinpoint.svg';
import rise from '@/public/rise.svg';
import fd from '@/public/fd.png';
import bd from '@/public/bd.png';
import gd from '@/public/gd.png';
import fx from '@/public/fx.png';
import snowflake from '@/public/snowflake.svg';
import Footer from './components/Footer';
import styles from './styles.css';

export default function Home() {
  return (
    <main className="w-full bg-white">

      <Navbar />

      <div className='w-full bg-white'>
        <div className='w-11/12 mx-auto py-20'>
          <div className='w-full md:w-9/12'>
            <h1 className='text-5xl md:text-8xl mb-12'>
              Get your brand to <span className='text-orange-500'>
                STAND OUT🚀</span>on the digital space...
            </h1>
            <div className='flex gap-5'>
              <Link href={'#contact'} className='flex items-center px-4 py-2 md:py-3 md:px-6 
              bg-orange-600 hover:bg-orange-500 text-white rounded-full duration-500'>
                Let&rsquo;s Work
              </Link>
              <Link href={'#about-us'} className='flex items-center px-4 py-2 md:py-3 md:px-6 
                border border-orange-600 hover:bg-orange-600 
              text-orange-500 hover:text-white rounded-full duration-500'>
                About Us
              </Link>
            </div>
            
          </div>
        </div>
      </div>

      <div className='w-full py-24 bg-orange-100' id="about-us">
        <div className='w-11/12 mx-auto flex flex-col md:flex-row gap-20 md:gap-0'>
          <div className='w-full md:w-6/12'>
            <div className='mb-12'>
              <h1 className='text-3xl md:text-5xl text-orange-600'>Who we are</h1>
            </div>
            <div className='w-full'>
              <div className='w-full text-lg md:text-2xl'>
                Welcome to Inventig! 🚀 Where digital excellence meets innovation. As a premier🥇 web development and design agency in Nigeria, we&rsquo;re on a mission to redefine the online landscape, one pixel at a time. Join us in shaping a distinct digital identity for your brand.
              </div>
            </div>
          </div>
          <div className='w-full md:w-6/12 flex items-center md:justify-center'>
            <div className='grid grid-cols-2 gap-2 w-11/12 md:w-auto'>
              <div className='bg-orange-600 text-white p-6 rounded-3xl flex flex-col shadow-2xl shadow-black'>
                <span>Projects</span>
                <span className='text-3xl'>150+</span>
              </div>
              <div className='bg-black text-white p-6 rounded-3xl flex flex-col shadow-2xl shadow-white'>
                <span>Clients</span>
                <span className='text-3xl'>132+</span>
              </div>
              <div className='bg-black text-white p-6 rounded-3xl flex flex-col shadow-2xl shadow-white'>
                <span>Awards</span>
                <span className='text-3xl'>12+</span>
              </div>
              <div className='bg-orange-600 text-white p-6 rounded-3xl flex flex-col shadow-2xl shadow-black'>
                <span>Experience</span>
                <span className='text-3xl'>04+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full py-24 bg-white' id='services'>
        <div className='w-11/12 mx-auto'>
          <div className='mb-6'>
            <h1 className='text-3xl md:text-5xl text-orange-600'>What we do</h1>
          </div>
          <div className='text-lg md:text-2xl w-full md:w-6/12'>
            At Inventig, we don&rsquo;t just build websites🙅‍♂️, 
            we sculpt digital experiences that resonate with impact.
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-12'>
            <div className='w-11/12'>
              <div className='bg-orange-100 rounded-full h-16 w-16 flex items-center justify-center mb-2'>
                  <Image src={fd} className='h-5/6 w-5/6' alt=''/>
              </div>
              <div>
                <div className='mb-3'>
                  <h1 className='text-2xl'>Frontend Development</h1>
                </div>
                <div>
                  <p>
                    Our frontend development team crafts seamless and visually 
                    captivating user interfaces that engage and delight. 
                    We bring your designs to life, ensuring a flawless 
                    user experience across all devices. 
                    From responsive web applications to dynamic websites, 
                    we make the frontend an immersive journey for your audience.
                  </p>
                </div>
              </div>
            </div>
            <div className='w-11/12'>
              <div className='bg-orange-100 rounded-full h-16 w-16 flex items-center justify-center mb-2'>
                  <Image src={bd} className='h-5/6 w-5/6' alt=''/>
              </div>
              <div>
                <div className='mb-3'>
                  <h1 className='text-2xl'>Backend Development</h1>
                </div>
                <div>
                  <p>
                    The backbone of your digital infrastructure, 
                    our backend development services ensure your website 
                    or application operates seamlessly. We specialize in robust 
                    server-side scripting, database management, and API integrations, 
                    creating a powerful foundation for your digital endeavors.
                  </p>
                </div>
              </div>
            </div>
            <div className='w-11/12'>
              <div className='bg-orange-100 rounded-full h-16 w-16 flex items-center justify-center mb-2'>
                  <Image src={fx} className='h-5/6 w-5/6' alt=''/>
              </div>
              <div>
                <div className='mb-3'>
                  <h1 className='text-2xl'>Web Design and Redesign</h1>
                </div>
                <div>
                  <p>
                    First impressions matter, and our web design services 
                    are tailored to leave a lasting one. Whether creating a 
                    new site from scratch or breathing new life into an existing one, 
                    our designers blend aesthetics with functionality. 
                    We prioritize user-centric design, ensuring your website not 
                    only looks stunning but also delivers an intuitive and engaging experience.
                  </p>
                </div>
              </div>
            </div>
            <div className='w-11/12'>
              <div className='bg-orange-100 rounded-full h-16 w-16 flex items-center justify-center mb-2'>
                  <Image src={gd} className='h-5/6 w-5/6' alt=''/>
              </div>
              <div>
                <div className='mb-3'>
                  <h1 className='text-2xl'>Graphic Design</h1>
                </div>
                <div>
                  <p>
                    Visual communication is an art, and our graphic design team 
                    is here to tell your brand&rsquo;s story with striking visuals. 
                    From logos that define your identity to eye-catching marketing collateral, 
                    we curate designs that capture attention and leave a lasting imprint on your audience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='w-full py-24 bg-black text-white'>
        <div className='w-11/12 mx-auto'>
          <div className='mb-12'>
            <h1 className='text-3xl md:text-5xl text-orange-500'>Recent works</h1>
          </div>
          <div className='w-full md:w-6/12 mb-12'>
            <p className='text-lg md:text-2xl'>
              Here are some of our favorite projects we have done lately. 
              Feel free to check them out.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <div className='mb-5'>
                <Image src={pjx1} alt='' className='h-3/6'/>
              </div>
              <div>
                <div className='rounded-full bg-white text-black h-8 w-8 
                flex items-center justify-center mb-3'>
                  <span>01</span>
                </div>
                <h1 className='text-orange-500'>Dev ADG.</h1>
                <span>Branding / Custom Animations / UI</span>
              </div>
            </div>

            <div>
              <div className='mb-5'>
                <Image src={pjx4} alt='' className='h-3/6'/>
              </div>
              <div>
                <div className='rounded-full bg-white text-black h-8 w-8 
                flex items-center justify-center mb-3'>
                  <span>02</span>
                </div>
                <h1 className='text-orange-500'>Jonathan ltd.</h1>
                <span>Branding / Custom Animations</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className='w-full py-32 bg-black text-white'>
        <div className='w-11/12 mx-auto'>
          <div className='w-full md:w-7/12 mx-auto text-center mb-24'>
            <h1 className='text-3xl md:text-5xl text-orange-500'>
              Brands we have had priveledge to work with
            </h1>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 place-items-center'>
            <Image src={flash} alt='' className='md:w-full md:h-full border-y-[0.1px] 
            border-gray-600 border-r'/>
            <Image src={rise} alt='' className='md:w-full md:h-full border-y-[0.1px] 
            border-gray-600 md:border-r'/>
            <Image src={pinpoint} alt='' className='md:w-full md:h-full border-y-[0.1px] 
            border-gray-600 border-r'/>
            <Image src={snowflake} alt='' className='md:w-full md:h-full border-y-[0.1px] 
            border-gray-600'/>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
