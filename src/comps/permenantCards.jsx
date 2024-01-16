import React from 'react'
import logo from "../logo.svg";

export default function permenantCards(tem) {
    // console.log(tem.img);
  return (
    <div className="bg-white p-1 rounded-md shadow-md m-2">
      <img src={tem.img}  alt="Weather" className="w-full h-32 object-scale-down  rounded-t-md" />
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold mb-2">{tem.time}</h2>
        <p className="text-gray-600">{tem.temp}F</p>
        
        <p className="text-gray-600">{tem.condition}</p>
        <p className="text-gray-600">Wind is {tem.wind}Kmph</p>
        <p className="text-gray-600">{tem.humidity} Humidity</p>
      </div>
    </div>
  )
}
