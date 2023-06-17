import React from 'react'
import { FaGithub } from 'react-icons/fa';
const Header = () => {
  return (
    <div className='p-10 space-y-10 w-full h-full flex flex-col items-center justify-center '>
      <h1 className='text-5xl font-extrabold'>Ethanus MERN - Internship</h1>

      <div className='flex flex-col space-y-2 md:space-x-2 items-center md:flex md:flex-row'>

        <a className='px-10 mt-2 border-2 hover:bg-black hover:text-white py-11 border-black/10  rounded-xl font-bold text-3xl' href='https://github.com/AayushYadav2002/Responsive-Paragraph-Word-Count'> <FaGithub /></a>
        <h2 className='text-xl py-8 hover:border-black/20 border-black/10 cursor-pointer px-10  border-2 rounded-xl'>Task - 3</h2>
        <a href="mailto:aayush.yadav2020@vitbhopal.ac.in">
          <div className='px-10 border-2  py-6 border-black/10 cursor-pointer hover:border-black/20  rounded-xl font-bold text-xl'>
            <h3 className='font-normal text-lg'>Aayush Yadav - 20BCE10401</h3>
            <p className='font-thin text-sm'>aayush.yadav2020@vitbhopal.ac.in</p>
          </div>
        </a>
      </div>



    </div>
  )
}

export default Header
