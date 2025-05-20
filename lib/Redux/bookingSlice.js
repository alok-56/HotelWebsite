import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  destination: "",
  hotelId: "",
  checkIn: null,
  checkOut: null,
  guests: {
    rooms: 1,
    adults: 1,
    children: 0,
  },
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setDestination(state, action) {
      state.destination = action.payload.destination;
      state.hotelId = action.payload.hotelId;
    },
    setCheckIn(state, action) {
      state.checkIn = action.payload;
      // Reset checkOut if it's before new checkIn
      if (state.checkOut && new Date(action.payload) > new Date(state.checkOut)) {
        state.checkOut = null;
      }
    },
    setCheckOut(state, action) {
      state.checkOut = action.payload;
    },
    setGuests(state, action) {
      state.guests = { ...state.guests, ...action.payload };
    },
    resetBooking(state) {
      return initialState;
    },
  },
});

export const {
  setDestination,
  setCheckIn,
  setCheckOut,
  setGuests,
  resetBooking,
} = bookingSlice.actions;

export default bookingSlice.reducer;
