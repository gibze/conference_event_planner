// store.js
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
import avReducer from './avSlice';
import mealsReducer from './mealsSlice';
import


export default configureStore({
  reducer: {
    venue: venueReducer,
    av: avReducer,
    meals : mealsReducer, 
  },
});
