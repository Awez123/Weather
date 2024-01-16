import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos=createAsyncThunk("fetchTodos",async (count) => {
    console.log(count);
    const resp = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${count}&days=10`,{
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2716931fb1msh5693952f1b6a041p189cb2jsnf87ec135eaba',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        }})
        return resp.json();
        
})


const todoSlice = createSlice({
    name:"todo",
    initialState:{
        isLoading:false,
        data:null,
        isError:false,
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchTodos.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data = action.payload;
            state.error=false
        });
        builder.addCase(fetchTodos.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(fetchTodos.rejected,(state,action)=>{
            state.isError=true;
            console.log("error",action.payload);
        })
    }
});



export default todoSlice.reducer;