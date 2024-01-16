import React from 'react'
import Pcards from "./permenantCards";
import { useState , useEffect} from "react";
import {useDispatch,useSelector  } from "react-redux";
import { fetchTodos } from '../redux/slice/todo';

export default function(){
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    // console.log("state",state.todo.data.forecast.forecastday[0].hour);
    let [count,setCount] = useState('');
    

    const [data,setData]=useState([])
    

    const sending = () =>{
        dispatch(fetchTodos(count))
        
    }
    

    
//     const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=India&days=10`;
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '2716931fb1msh5693952f1b6a041p189cb2jsnf87ec135eaba',
// 		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
// 	}
// };
//     useEffect(() => {
//         fetch(url,options)
//         .then(response => response.json()).then(json => {
//             // console.log("jsonnn",json.forecast.forecastday[0].hour)
//             setData(json.forecast.forecastday[0].hour)
//             // console.log(data)
//         }).catch(e => {
//             console.log("e",e)
//         })
//     },[])
  return ( 
    
    <div className=''>    
        <h2 className='font-bold font-mono text-3xl'>CURRENT WEATHER</h2>
        <div className="flex items-center w-full justify-center my-4">
          <input
            type="text"
            placeholder="Search..."
            value={count}
            onChange={(e) => {setCount(e.target.value)}}
            className="px-4 py-2 rounded-md border-none focus:outline-none focus:ring focus:border-blue-300"
          />
          <button className="ml-2 bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100" onClick={sending}>
            Search
          </button>
        </div>
        <div className="container mx-auto p-4 h-[45.5rem] overflow-y-auto rounded-md">
            {
                state.todo.data == null ? console.log(" ") :
                    

            (
                Array.from(state.todo.data.forecast.forecastday[0].hour).map(tem => (
                <Pcards 
                time={tem.time}
                img={tem.condition.icon}
                condition ={tem.condition.text}
                wind={tem.wind_kph}
                temp={tem.temp_f}
                humidity={tem.humidity}

                />
                )
                )
            )
            
  
        }
            </div> 
    </div>
             )

}
