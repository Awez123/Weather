import React from 'react'
import IpLookup from "./iplookupCard";
import Astro from "./astro";

export default function leftside() {
  return (
    <div className="container mx-auto p-4 h-[52.05rem] overflow-y-auto">
     <IpLookup
     name={"IP Lookup"}
     desc={"Allows a user to get up to date information for an IP address"}

     />
     <Astro
     name={"Astronomy"}
     desc={"Allows a user to get up to date information for sunrise, sunset, moonrise, moonset, moon phase and illumination"}
     />


    </div>
  )
  
}
