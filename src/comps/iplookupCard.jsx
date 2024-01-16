import React from 'react'
import {fetchIpLookup} from "../redux/slice/ipLookup";
import { useState , useEffect} from "react";
import {useDispatch,useSelector  } from "react-redux";

export default function(dets) {

    
    const state = useSelector((state) => state)
    let [data,setData] = useState("");
    const dispatch = useDispatch();
    const sending = () =>{
        dispatch(fetchIpLookup(data))
        console.log(state.iplookup.data);
    }

  return (
    <div className="bg-white p-4 rounded-md shadow-md m-3">
      <div className="mb-4">
        <label className="block text-gray-700 text-xl font-bold mb-2 font-mono">{dets.name}</label>
        <p className='font-mono mb-4 font-bold'>{dets.desc}</p>
        <input
          type="text"
          onChange={(e) => {setData(e.target.value)}}
          placeholder="Enter a valid IP address"
          className="px-4 py-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <button
      onClick={sending}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Search
      </button>
      {state.iplookup.data == null ? console.log(" ") :(
        <div>
            <h2 className='font-mono mb-2 font-bold mt-7' >{state.iplookup.data.city}</h2>
            <h2 className='font-mono mb-2 font-bold mt-2' >{state.iplookup.data.country_name}</h2>
            <h2 className='font-mono mb-2 font-bold mt-2' >Geo Name: {state.iplookup.data.geoname_id}</h2>
            <h2 className='font-mono mb-2 font-bold mt-2' >lat and log: {state.iplookup.data.lat}/{state.iplookup.data.lon}</h2>
            <h2 className='font-mono mb-2 font-bold mt-2' >{state.iplookup.data.localtime}</h2>
            <h2 className='font-mono mb-2 font-bold mt-2' >{state.iplookup.data.type}</h2>
            </div>
            )

      }
    </div>
  )
}
