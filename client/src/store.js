import { configureStore } from '@reduxjs/toolkit'
import postingsReducer from './features/postings/postingsSlice'

export const store = configureStore({
  reducer: {
    postings: postingsReducer,
  },
})