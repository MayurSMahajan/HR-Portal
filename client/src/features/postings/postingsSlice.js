import { createSlice } from '@reduxjs/toolkit'
import mockActiveJobsList from '../../mock_data/mockActiveJobsList'

const initialState = {
  postingsList: mockActiveJobsList,
}

export const postingsSlice = createSlice({
  name: 'postings',
  initialState,
  reducers: {
  },
})

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default postingsSlice.reducer