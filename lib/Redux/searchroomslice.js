// lib/Redux/searchroomslice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Searchroom, Getroombyid, Bookroom } from "@/lib/API/Room";

export const fetchSearchedRooms = createAsyncThunk(
  "rooms/search",
  async ({ branchid, checkindate, checkoutdate }, thunkAPI) => {
    try {
      const res = await Searchroom(branchid, checkindate, checkoutdate);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchRoomById = createAsyncThunk(
  "rooms/getById",
  async (id, thunkAPI) => {
    try {
      const res = await Getroombyid(id);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const bookRoom = createAsyncThunk(
  "rooms/book",
  async (data, thunkAPI) => {
    try {
      const res = await Bookroom(data);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const searchroomSlice = createSlice({
  name: "searchroom",
  initialState: {
    loading: false,
    rooms: [],
    selectedRoom: null,
    bookingResponse: null,
    error: null,
  },
  reducers: {
    clearSelectedRoom: (state) => {
      state.selectedRoom = null;
    },
    clearBookingResponse: (state) => {
      state.bookingResponse = null;
    },
    Setselectedroomid: (state, action) => {
        state.selectedRoom = action.payload;
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchedRooms.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchedRooms.fulfilled, (state, action) => {
        state.loading = false;
        state.rooms = action.payload;
      })
      .addCase(fetchSearchedRooms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchRoomById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRoomById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedRoom = action.payload;
      })
      .addCase(fetchRoomById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(bookRoom.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(bookRoom.fulfilled, (state, action) => {
        state.loading = false;
        state.bookingResponse = action.payload;
      })
      .addCase(bookRoom.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSelectedRoom, clearBookingResponse,Setselectedroomid } = searchroomSlice.actions;

export default searchroomSlice.reducer;
