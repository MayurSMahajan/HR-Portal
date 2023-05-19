import { createSlice } from '@reduxjs/toolkit'
import mockActiveJobsList from '../../mock_data/mockActiveJobsList'

const initialState = {
  postingsList: mockActiveJobsList,
}

export const postingsSlice = createSlice({
  name: 'postings',
  initialState,
  reducers: {
    removeItem: (state, actions) => {
        const itemId = actions.payload;
        state.postingsList = state.postingsList.filter((item) => item.id !== itemId);
        console.log(state.postingsList);
      },
  },
})

export const {  removeItem } = postingsSlice.actions;
export default postingsSlice.reducer