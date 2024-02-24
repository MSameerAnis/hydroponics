import React from 'react'

import { useState,useEffect } from 'react';

const Reading = () => {

  const [data,setData] =  useState([]);


  const fetchData= async ()=>{

    try {
      const response = await fetch('https://fypapi-haziq059321s-projects.vercel.app/api/data/getData');
   
      const data = await response.json();
      setData(data)
     console.log(setData) ;
    } catch (error) {
      console.log('Error fetching data:', error);
    }



  }

  useEffect(()=>{


    fetchData();
  },[])






 return (
    <div className="container mx-auto p-4">
    <h1 className="text-3xl   text-blue-950  mb-4 font-semibold"> NFT System Reading</h1>


    <div className="overflow-x-auto">
      <table className=" min-w-full table-auto border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border">Type</th>
            <th className="py-2 px-4 border">Value</th>
            <th className="py-2 px-4 border">Created</th>
          </tr>
        </thead>
        <tbody>
          {data.map(entry => (
            <tr key={entry.id}>
              <td className="py-2 px-2  text-blue-950 font-bold   border">{entry.type}</td>
              <td className="py-2 px-2 text-center      border">{entry.value}</td>
              <td className="py-2 px-2  text-center    border">{entry.created}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>



    
   )
}

export default Reading
