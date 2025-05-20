import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "@/lib/Redux/hotelSlice";
import bookingReducer from "@/lib/Redux/bookingSlice";
import searchroomReducer from "@/lib/Redux/searchroomslice";

export const store = configureStore({
  reducer: {
    hotel: hotelReducer,
    booking: bookingReducer,
    searchroom: searchroomReducer,
  },
});
