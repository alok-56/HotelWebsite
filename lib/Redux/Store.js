import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "@/lib/Redux/hotelSlice";

export const store = configureStore({
  reducer: {
    hotel: hotelReducer,
  },
});
