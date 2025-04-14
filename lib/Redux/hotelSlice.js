import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {GetAllhotels,Gethotelbyid
} from "@/lib/API/Hotel";





export const fetchallhotels = createAsyncThunk(
  "hotels/fetchallhotels",
  async (id, { rejectWithValue }) => {
    try {
      const response = await GetAllhotels();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



export const fetchhotelbyid = createAsyncThunk(
  "hotels/fetchhotelbyid",
  async (id, { rejectWithValue }) => {
    try {
      const response = await Gethotelbyid(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



const hotelsSlice = createSlice({
  name: "hotel",
  initialState: {
    Hotels: [],
    hotel:null,
    error: null,
    loading:false,
   singleloading:false,
   singleerror:null


 
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchallhotels.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchallhotels.fulfilled, (state, action) => {
      state.Hotels = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchallhotels.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Fetch  by id
    builder.addCase(fetchhotelbyid.pending, (state) => {
      state.singleloading = true;
      state.singleerror = null;
    });
    builder.addCase(fetchhotelbyid.fulfilled, (state, action) => {
      state.hotel = action.payload;
      state.singleloading = false;
    });
    builder.addCase(fetchhotelbyid.rejected, (state, action) => {
      state.singleloading = false;
      state.singleerror = action.payload?.message || "Something went wrong";
      state.hotel = []; 


    });
  },
});

export const {
} = hotelsSlice.actions;

export default hotelsSlice.reducer;
