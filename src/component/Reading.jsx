import React, { useState, useEffect } from 'react';
import { MdOutlineDelete } from "react-icons/md";

const Reading = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [dateTimeFilter, setDateTimeFilter] = useState('');
  const [deviceFilter, setDeviceFilter] = useState('');
  const [loadind , setLoading]= useState(false);


  const fetchData = async () => {
    try {
      const response = await fetch('https://fypapi-haziq059321s-projects.vercel.app/api/data/getData');
      const data = await response.json();
      setData(data);
      setLoading(true)
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = data.filter(entry => {
    const typeMatch = filter ? entry.type.toLowerCase() === filter.toLowerCase() : true;
    const dateTimeMatch = dateTimeFilter ? entry.created.includes(dateTimeFilter) : true;
    const deviceMatch = deviceFilter ? entry.device_id.includes(deviceFilter) : true;
    return typeMatch && dateTimeMatch&& deviceMatch;


    



  });

  if(!loadind) return <p className=' text-center text-3xl mt-60 font-semibold  text-blue-900'>Loading....</p>

  return (
    <div className="container mx-auto p-4">
      <h1 className=" text-center   text-3xl text-blue-950 mb-4 font-semibold">NFT System Reading</h1>

      <div className="flex flex-wrap justify-center mb-4">
        <button
          className={`mr-2 mb-2 px-4 py-2 ${
            filter === 'ph' ? 'bg-gradient-to-r from-cyan-500 to-blue-800 text-white' : 'bg-gray-300 text-gray-700'
          }`}
          onClick={() => setFilter('ph')}
        >
          pH
        </button>
        <button
          className={`mr-2 mb-2 px-4 py-2 ${
            filter === 'tds' ? 'bg-gradient-to-r from-cyan-500 to-blue-800 text-white' : 'bg-gray-300 text-gray-700'
          }`}
          onClick={() => setFilter('tds')}
        >
          TDS
        </button>
        <button
          className={`mr-2 mb-2 px-4 py-2 ${
            filter === 'temperature' ? 'bg-gradient-to-r from-cyan-500 to-blue-800 text-white' : 'bg-gray-300 text-gray-700'
          }`}
          onClick={() => setFilter('temperature')}
        >
          Temperature
        </button>
        <button
          className={`mr-2 mb-2 px-4 py-2 ${
            filter === 'fanstatus' ? 'bg-gradient-to-r from-cyan-500 to-blue-800 text-white' : 'bg-gray-300 text-gray-700'
          }`}
          onClick={() => setFilter('fanstatus')}
        >
          Fan Status
        </button>
        <button
          className={`  mr-2 mb-2 px-4 py-2 ${
            filter === 'humidity' ? 'bg-gradient-to-r from-cyan-500 to-blue-800 text-white' : 'bg-gray-300 text-gray-700'
          }`}
          onClick={() => setFilter('humidity')}
        >
          Humidity
        </button>
     
 
         <button
          className={`ml-2 mb-2  px-4 py-2 ${
            filter === 'lightstatus' ? 'bg-gradient-to-r from-cyan-500 to-blue-800 text-white' : 'bg-gray-300 text-gray-700'
          }`}
          onClick={() => setFilter('lightstatus')}
        >
          Light Status
        </button>
       
        <button
          className={`ml-2 mb-2   px-4 py-2 ${
            filter === 'pumpstatus' ? 'bg-gradient-to-r from-cyan-500 to-blue-800 text-white' : 'bg-gray-300 text-gray-700'
          }`}
          onClick={() => setFilter('pumpstatus')}
        >
          Pump Status
        </button>
        <button
          className={` ml-2  px-4 py-2 mb-2 flex justify-evenly gap-3 items-center ${
            filter !== '' ? 'mb-2' : '' 
          } bg-red-300 text-gray-700`}
          onClick={() => setFilter('')}
        >
          Clear Type  <MdOutlineDelete />
         </button>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="(YYYY-MM-DDThh:mm:ss)"
          className="px-4 mb-2 py-2 border border-gray-300 rounded-md"
          value={dateTimeFilter}
          onChange={e => setDateTimeFilter(e.target.value)}
        />
           <input
          type="text"
          placeholder="Device0 ID"
          className=" ml-2  mb-2  px-4 py-2 border border-gray-300 rounded-md"
          value={deviceFilter}
          onChange={e => setDeviceFilter(e.target.value)}
        />
        
        {/* Clear button for device filter */}
        <button
          className={`px-4 py-2 mb-2 ml-2 flex justify-center items-center gap-2 ${
            deviceFilter !== '' ? 'mb-2' : '' 
          } bg-red-300 text-gray-700`}
          onClick={() => setDeviceFilter('')}
        >
          Clear Device<MdOutlineDelete />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300">
          <thead className="bg-blue-300">
            <tr>
            <th className="py-2 px-4 border">Device</th>
              <th className="py-2 px-4 border">Type</th>
              <th className="py-2 px-4 border">Value</th>
              <th className="py-2 px-4 border">Date & Time</th>
             
            </tr>
          </thead>
          <tbody>
            {filteredData.map(entry => (
              <tr key={entry.id}>
                 <td className="py-2 px-2 text-center border">{entry.device_id}</td>
                <td className="py-2 px-2 text-center text-blue-950 font-bold border">{entry.type}</td>
                <td className="py-2 px-2 text-center border">{entry.value}</td>
                <td className="py-2 px-2 text-center border">{entry.created}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default Reading;
