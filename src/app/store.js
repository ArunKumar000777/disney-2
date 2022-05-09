import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import movieReduser from '../features/movie/movieSlice'

export const store = configureStore({
  reducer: {
    movie: movieReduser
  },
});
