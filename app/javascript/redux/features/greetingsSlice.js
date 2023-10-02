import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState =  {
    loading: false,
    message: "",
    error: "",
}

export const fetchMessage = createAsyncThunk('message/fetchMessage', async () => {
    try {
        const response = await fetch('http://127.0.0.1:3000/api/v1/greetings/random');
        const data =  await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch Greeting');
    }
})

const greetingSlice = createSlice({
    name: 'greeting',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchMessage.fulfilled, (state, action) =>{
            state.message = action.payload;
        });
        builder.addCase(fetchMessage.rejected, (state, action) => {
            state.message = "";
            state.error = action.error.message;
        });
    },
});

export default greetingSlice.reducer;