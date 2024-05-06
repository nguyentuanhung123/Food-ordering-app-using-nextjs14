import React from 'react'

//components
import Header from '@/components/layout/Header'
import Hero from '@/components/layout/Hero'
import HomeMenu from '@/components/layout/HomeMenu'
import SectionHeaders from '@/components/layout/SectionHeaders'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className='text-center my-16'>
        <SectionHeaders 
          subHeader={'Our story'} 
          mainHeader={'About us'}
        />
        <div className='text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4'>
          <p className=''>
            Legend has it, King Umberto I of Italy and Queen Margherita of Savoy were visiting Naples around 1889. 
            Luckily for pizza history, the queen became sick after eating rotten food, which is when she requested to 
            dine on traditional Italian food.
          </p>
          <p className=''>
            Here is where chef Raffaele Esposito had the glory of serving his pizza to the royals. He went above and 
            beyond for the king and queen, creating a pizza with mozzarella, basil, and tomatoes, to resemble the colors 
            of the Italian flag.
          </p>
          <p className=''>
            However, back then a king and queen would not have been expected to visit a local pizzeria shop. So instead, 
            Esposito took the pizzas himself. This is known as the first ever pizza delivery recorded in pizza history. 
            And also, the birth of the authentic Margherita pizza, which is named after the Queen&apos;s review of Esposito&apos;s 
            pie, calling it one of the best dishes she had ever eaten.
          </p>
        </div>
      </section>
      <section className='text-center my-8'>
        <SectionHeaders 
          subHeader={'Don\'t hesitate'} 
          mainHeader={'Contact us'}
        />
        <div className='mt-8'>
          <a className='text-4xl underline text-gray-500' href='tel:+ 46738123123'>
            + 46 738 123 123
          </a>
        </div>
      </section>
      <footer className='border-t p-8 text-center text-gray-500 mt-16'>
        &copy; 2024 All rights reserved
      </footer>
    </>
  )
}

export default Home