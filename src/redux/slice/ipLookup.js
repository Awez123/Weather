import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const fetchIpLookup=createAsyncThunk("fetchIpLookup",async (count) => {
    console.log("iam here");
    const resp = await fetch(`https://weatherapi-com.p.rapidapi.com/ip.json?q=${count}`,{
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2716931fb1msh5693952f1b6a041p189cb2jsnf87ec135eaba',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        }})
        return resp.json();
        
})
const ipLookupSlice = createSlice({
    name:"ipLookup",
    initialState:{
        isLoading:false,
        data:null,
        isError:false,
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchIpLookup.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data = action.payload;
            state.error=false
        });
        builder.addCase(fetchIpLookup.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(fetchIpLookup.rejected,(state,action)=>{
            state.isError=true;
            console.log("error",action.payload);
        })
    }
});

export default ipLookupSlice.reducer;