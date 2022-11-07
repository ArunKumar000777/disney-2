import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import movieReduser from '../features/movie/movieSlice'
import userReduser from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    movie: movieReduser,
    user: userReduser
  },
});
