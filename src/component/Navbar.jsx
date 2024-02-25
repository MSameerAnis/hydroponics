import React from 'react'
import logoImg from '../assets/Logo.jpg'
import  { NavLink } from 'react-router-dom'



import { FaBars, FaTimes } from 'react-icons/fa'

import { useState } from 'react';


const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {

            id: 0,
            link: 'home'
        },

        {

            id: 1,
            link: 'about'
        },

        {

            id: 2,
            link: 'working'
        },

        {

            id: 3,
            link: 'team'
        },
        {

            id: 4,
            link: 'contact'
        },
        {

            id: 5,
            link: 'reading'
        },




    ]

    const navStyle = ({isActive})=>{

        return{

            fontweight: isActive ? 'bold' :'normal',
            textDecoration: isActive ? 'underline' :'none',
        }

    }


    return (

        <div className='  sticky    h-20  max-w-full   bg-gradient-to-br to-green-100 from-blue-10  flex  justify-evenly   shadow-lg     shadow-blue-100 
    '>

            <div className=' flex     p-4 mx-4 gap-4  items-center'>
                <img src={logoImg} className=' w-20 ' alt="" />

                <h4 className='   text-2xl gap-2  font-bold  md:font-bold md:text-4xl   text-blue-900   capitalize hover:cursor-pointer  '>
                    hydroponics
                </h4>
            </div>


            <div className=' flex  items-center  justify-between gap-20  '>
                <ul className=' hidden md:flex  justify-center items-center gap-10   '>


                    {

                        links.map(({ id, link }) => {
                            return (

                                <li key={id} className='font-bold text-blue-900 capitalize  text-lg hover:cursor-pointer hover:scale-150 duration-150  active:bg-blue-700 active:text-white'>


                                    <NavLink style={navStyle} to={link} smooth duration={500} >

                                        {link}

                                    </NavLink>


                                </li>


                            )
                        })
                    }
                </ul>

                <div onClick={() => { setNav(!nav) }} className='  cursor-pointer  pr-8 text-blue-900  z-10  md:hidden  '>
                    {
                        nav ? <FaTimes size={25} /> : <FaBars size={25} />
                    }
                </div>




            </div>


            {

                nav && (
                    <>
                        <ul className=' w-full h1/2 fixed flex flex-col py-5 gap-7 
                           items-center justify-center  top-0 
                           h-screen  bg-white  
                             transition-all duration-500 ease-in '>

                            {
                                links.map(({ id, link }) => {
                                    return (


                                        <li
                                            key={id}

                                            className=' cursor-pointer uppercase 
                                                gap-6 
                                    text-2xl bold  text-blue-900
                          hover:scale-150 duration-150'>

                                            <NavLink style={navStyle} to={link} smooth duration={500}  onClick={()=>setNav(!nav)} >

                                                {link}

                                            </NavLink>

                                        </li>
                                    )


                                })
                            }




                        </ul>






                    </>
                )
            }

















        </div>
    )
}

export default Navbar
