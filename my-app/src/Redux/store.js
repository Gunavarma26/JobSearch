// store.js
import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from '../Redux/slices/jobSlice'



export const store = configureStore({
  reducer: {
    jobs:jobsReducer,
  },
});



