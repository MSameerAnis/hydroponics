import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import aliyan from '../assets/Aliyan.jpeg'
import Talha from '../assets/Talha.jpeg'
import sameer from '../assets/sameer.jpeg'
import Cake from '../assets/Cake.jpeg'

import Sir from '../assets/Sir.jpeg'



const Team = () => {

    var settings = {
        dots: false,
        fade: true,

        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };



    const data = [
        {
            id: 1,
            src: Sir,
            name: ' Muhammad Najamul Islam Farooqui ',
            roll: 'Assistatnt prof. CED',

            Title: 'Internal Advisor',
            para: (
                <>
                    <p>
                        
                    provided crucial technical expertise and problem-solving skills, ensuring the efficient design and functionality of your smart hydroponics management system, while also contributing to user experience refinement and quality assurance efforts.
                    </p>
                </>
            ),
            child: (
                <>
                    <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com//in/muhammad-najmul-islam-farooqui-3684b17/',
            child1: (
                <>
                    <HiOutlineMail size={30} />
                </>
            ),
            href1: 'mailto:mfarooqui@ssuet.edu.pk'

        },
        {
            id: 2,
            src: Cake,
            name: ' Sheikh Haziquddin ',
            roll: 'CE-2020-059',

            Title: 'Backend Developer',
            para: (
                <>
                    <p>
             implementing the server-side infrastructure, databases, and APIs, ensuring seamless communication between the hydroponics system's frontend interface and hardware components.  
                    </p>
                </>
            ),

            child: (
                <>
                    <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/haziq-shiekh-8a76b4248/',

            child1: (
                <>
                    <HiOutlineMail size={30} />
                </>
            ),
            href1: 'mailto:haziqshiekh824@gmail.com'

        },
        {
            id: 3,
            src: aliyan,
            name: ' Aliyan Khan (GL) ',
            roll: 'CE-2020-070',
            Title: 'Hardware',
            para: (
                <>
                    <p>
                        
                  Responsible for  designing, prototyping, and optimizing the physical components of the hydroponics management system, including sensors, actuators, and control circuits, ensuring they met performance requirements and interfaced effectively with the software backend.
                    </p>
                </>
            ),

            child: (
                <>
                    <FaLinkedin size={30} />
                </>
            ),

            href: 'https://www.linkedin.com/in/aliyan-khan-9407a6241/',

            child1: (
                <>
                    <HiOutlineMail size={30} />
                </>
            ),
            href1: 'mailto:aliyankhan25k@gmail.com'

        },
        {
            id: 4,
            src: sameer,
            name: ' Muhammad Sameer',
            roll: 'CE-2020-072',
            Title: 'Front End Developer',
            para: (
                <>
                    <p>
                    esponsible for crafting the user interface and experience of the hydroponics management system, translating design concepts into functional and visually appealing interfaces that facilitate user interaction and accessibility
                    </p>
                </>
            ),
            child: (
                <>
                    <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/muhammad-sameer-56ba92204',


            child1: (
                <>
                    <HiOutlineMail size={30} />
                </>
            ),
            href1: 'mailto:sameeranees1234@gmail.com'

        },
        {
            id: 5,
            src: Talha,
            name: ' Muhammad Talha ',
            roll: 'CE-2020-076',
            Title: 'Hardware',
            para: (
                <>
                    <p>
                    Responsible for  quality and reliability of the system while also overseeing the implementation of hardware components, ensuring seamless integration and optimal performance. 
                    </p>
                </>
            ),
            child: (
                <>
                    <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/muhammad-talha-5a0ba9269/',

            child1: (
                <>
                    <HiOutlineMail size={30} />
                </>
            ),
            href1: 'mailto:talha.muhammad7980@gmail.com'

        },



    ]



    return (
        <div name="team"  className='   absolute  -z-10 flex  w-full h-screen  bg-gradient-to-b  
    from-blue-200 via-green-200 to-blue-300'>

            <div className=' w-3/4  m-auto'>


                <div>
                    <h3 className=' flex justify-center text-blue-900 border-b-2 border-blue-400  py-4 text-xl font-bold capitalize pb-5 md:text-4xl'>
                        Meet our Team
                    </h3>
                </div>




                <div className=' mt-10  p-4 '>

                    <Slider {...settings} className=' z-20'>
                        {
                            data.map(({ id, src, name, roll, Title, para, child, href, child1, href1 }) => (

                                <>

                                    <div key={id} className='   bg-white h-[550px] text-blue-950 rounded-xl gap-4 '>

                                        <div className='  h-56   rounded-t-xl  bg-gradient-to-br 
                                         from-blue-500 via-blue-400 to-blue-300  flex  justify-center items-center '>

                                            <img src={src} alt="/" className=' h-44  w-44 rounded-full' />



                                        </div>


                                        <div className='  p-4 flex flex-col justify-center items-center gap-0 md:gap-4 '>

                                            <h4 className='text-sm capitalize text-center  font-bold'>{name}</h4>
                                            <p className=' text-sm   font-semibold'>{roll}</p>
                                            <p className=''>{Title}</p>
                                            <p className= ' mt-4 capitalize text-lg   text-center'>{para}</p>

                                            

                                           


                                        </div>






















                                    </div>





                                </>


                            ))
                        }

                    </Slider>



                </div>

            </div>



        </div>
    )
}

export default Team
