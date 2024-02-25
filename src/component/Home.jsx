import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"
import homeImg from '../assets/homeImage.jpg'




const Home = () => {



 

  return (
    <div name="home"   className='   h-screen   py-20 w-full  bg-gradient-to-b  
    from-blue-200 via-green-200 to-green-300 flex flex-col justify-between
      md:flex-row  items-center 
    
      '>




      <div className='

        

      
    
      
        mr-4 my-8 py-0 flex justify-center  items-center 
       flex-col md:p-5  md:justify-center
        md:items-center  lg:mr-10
      '>


        <div>

        <h1 className='    px-4  pb-4 leading-relaxed
         flex justify-center items-center  text-2xl 
         font-bold  text-blue-900 md:text-5xl  
          lg:text-5xl tracking-tight  transition-all ease-in'>
            Smart Hydroponics System 
           </h1>


        </div>
       



           <div className='lg:pt-8 p-4 justify-center items-center text-xl  md:text-xl'>
           <p className='   capitalize   flex px-4 justify-center items-center text-lg  leading-relaxed md:p-4 md:text-xl'> 
            An iot Base system design to monitor ph,tds,temperature and humidity
            values and responsible to control nutrient flow and lightining  
        </p>


           </div>


     

        <div className='px-4  '>
        <button
  className='text-white w-fit px-6 py-3 my-6 flex items-center rounded-md capitalize bg-gradient-to-r from-cyan-500 to-blue-800 cursor-pointer group gap-4'
  onClick={() => {
    const link = document.createElement('a');
    link.href = require('../assets/research.pdf');
    link.download = 'Research-paper.pdf';
    link.click();
  }}
>
 Research Paper
  <span className='group-hover:rotate-90 duration-300'>
    <AiOutlineArrowRight size={20}/>
  </span>
</button>

                </div>
      </div>



      <div className='  p-5 md:h-1/2 md:w-full items-center flex 
       justify-center '>
        <img src={homeImg} alt="" className=' rounded-3xl  w-80  md:w-2/3rounded-3xl   lg:w-2/4 lg:rounded-xl ' />
      </div>





    </div>
  )
}

export default Home
