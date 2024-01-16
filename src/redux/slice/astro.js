import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const fetchAstro=createAsyncThunk("fetchAstro",async (count) => {
    console.log("iam here");
    const resp = await fetch(`https://weatherapi-com.p.rapidapi.com/astronomy.json?q=${count}`,{
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2716931fb1msh5693952f1b6a041p189cb2jsnf87ec135eaba',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        }})
        return resp.json();
        
})
const astroSlice = createSlice({
    name:"astro",
    initialState:{
        isLoading:false,
        data:
        {
            "location": {
              "name": "London",
              "region": "City of London, Greater London",
              "country": "United Kingdom",
              "lat": 51.52,
              "lon": -0.11,
              "tz_id": "Europe/London",
              "localtime_epoch": 1701696726,
              "localtime": "2023-12-04 13:32"
            },
            "astronomy": {
              "astro": {
                "sunrise": "07:48 AM",
                "sunset": "03:53 PM",
                "moonrise": "10:58 PM",
                "moonset": "12:49 PM",
                "moon_phase": "Waning Gibbous",
                "moon_illumination": 62,
                "is_moon_up": 1,
                "is_sun_up": 0
              }
            }
          },
        isError:false,
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchAstro.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data = action.payload;
            state.error=false
        });
        builder.addCase(fetchAstro.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(fetchAstro.rejected,(state,action)=>{
            state.isError=true;
            console.log("error",action.payload);
        })
    }
});

export default astroSlice.reducer;