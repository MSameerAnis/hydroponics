import React from 'react'
import { useState } from 'react'


const Contact = () => {

  const [name,setName ]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMeassage]=useState();








  
  
  return (
    <div
     name="contact"
    className=' w-full  h-screen bg-gradient-to-b 

     flex justify-center items-center  flex-col
    
    from-blue-300 via-green-200 to-blue-200
    
    '>

        <div  className=' flex justify-center items-center   max-w-screen-sm '>
            <p className=' p-10  font-bold   text-4xl capitalize   text-blue-950'>
                contact us
            </p>
        </div>

          <div className='  w-max h-3/4   flex justify-center items-center  flex-col'>

            <form action="https://getform.io/f/f75c737e-86c9-480b-b1ac-cc3bd775e667"
            method='POST'
             className=' flex flex-col gap-8 justify-center  items-center'>

                       <input  name ='name'
                       type="text" placeholder='Name ' 
                       value={name}
                       onChange={(e)=>{setName(e.target.value)}}
                       
                       className='p-4 rounded-2xl bg-transparent   border-2  border-blue-950 text-blue-950  focus:outline-none  w-3/4' />


                <input type="email" 
                 placeholder='email'
                 name='email' 
                 value={email}
                 onChange={(e)=>{setEmail(e.target.value)}}
                 className=' p-4 rounded-2xl bg-transparent   border-2  border-blue-950 text-blue-950  focus:outline-none w-3/4  ' />





               

                <textarea

                name='textarea'
                value={message}
                onChange={(e)=>{setMeassage(e.target.value)}}
                
                
                placeholder='Message ' id="" cols="30" rows="10" className='p-4 rounded-2xl bg-transparent   border-2  border-blue-950 text-blue-950  focus:outline-none  w-3/4'></textarea>
               



               <div className=' flex  py-0 justify-center items-center  '>
               <button className='text-white w-fit px-6  py-3 my-6 flex items-center rounded-md capitalize bg-gradient-to-r
                     from-cyan-500 to-blue-800 cursor-pointer group  gap-4 '>
                       Submit 
                    
                    </button>
               </div>


            </form>


          </div>


      
    </div>
  )
}

export default Contact


