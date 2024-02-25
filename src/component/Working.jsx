import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"


import ph from '../assets/ph.jpg'
import temp  from '../assets/temp.jpg'



import light2  from '../assets/light2.jpg'


const Working = () => {
    const working =[
        {

            id:1,
            src:ph,

            title:(
                <>
                <h5>role of pH </h5>
                </>
            ),
            para:(
                <>
                <p>
                pH levels in hydroponic solutions affect nutrient availability to plants. Maintaining the pH ensures that essential nutrients remain soluble to plants.
                </p>
                </>
            ),
            
            href:'https://atlas-scientific.com/blog/ph-for-hydroponics/',


           
        },

        {
            id:2,
            src:temp,
            para:(
                <>
                <p>
                Temperature influences various physiological processes in plants, including nutrient uptake, metabolic activity, and transpiration rates.
                </p>
                </>
            ),

            title:(
                <>
                <h5>role of temperature </h5>
                </>
            ),
            href:'https://waterchillers.com/blog/ideal-hydroponic-water-temp-dwc-control/'
           


        },

        {
            id:3,
            src:light2,
            title:(
                <>
                <h5>role of lightning </h5>
                </>
            ),
            
            para:(
                <>
                <p>
                Light is essential for photosynthesis, providing energy for plant growth and development in hydroponic systems.
                </p>
                </>
            ),
            href:'https://acornhorticulture.com/the-role-of-grow-lighting-in-hydroponics-maximising-yield-and-nutrient-absorption/#:~:text=Hydroponic%20lighting%20plays%20a%20crucial,optimise%20plant%20growth%20and%20development.'
           


        },
       
    ]



  return (
    <div name="working" className=' 

    bg-gradient-to-b  
    from-blue-200 via-green-100 to-blue-200

       overflow-x-hidden
       pt-7 pb-8 h-full md:h-screen'>
       <div
       
       className=' px-4 max-w-screen-lg mx-auto w-full h-full justify-center flex flex-col  '>
        <div className=' pb-8'>
            <h3 className=' flex justify-center text-blue-900 border-b-2 border-blue-400  py-4 text-xl font-bold capitalize pb-5 md:text-4xl'>
                how it work's 
            </h3>
           
        </div>


        <div  className=' grid gap-8 sm:grid-cols-2 md:grid-cols-3 px-8 sm:px-0 '>

            {
                working.map(({id,src,title,para,href})=>(

                    <div key={id} className=' shadow-md shadow-blue-800 rounded-lg  '>
                        <img src={src} alt="" className=' rounded-md duration-200 hover:scale-105 cursor-pointer pb-2' />

                         <h5 className=' flex justify-center text-xl  font-bold capitalize py-4 text-blue-900'>{title}</h5>
                            <p className=' items-center flex justify-center text-center leading-normal '>
                        {para}
                      </p>


                      <div className='flex justify-center  items-center  gap-8'>
                       <a href={href} className='flex justify-center py- items-center  gap-8'
                       >

                     <button className='text-white w-fit  px-4  py-3 my-6 flex items-center rounded-md capitalize bg-gradient-to-r
                     from-cyan-500 to-blue-800 cursor-pointer group  gap-4 '>
                        learn more 
                        <span className='group-hover:rotate-90 duration-300'>
                            <AiOutlineArrowRight size={20}/>
                        </span>
                      </button>
                       </a>
                      


                    </div>
                </div>





                    
                ))
            }
           
        </div>

       </div>
      
    </div>
  )
}

export default Working 