import { createSlice } from '@reduxjs/toolkit'

const initialState = 'Here is a list of anecdotes!'

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(_, action) {
      const message = action.payload
      return message
    },
    resetNotification() {
      return initialState
    }
  }
})

export const { setNotification, resetNotification } = notificationSlice.actions
export default notificationSlice.reducer