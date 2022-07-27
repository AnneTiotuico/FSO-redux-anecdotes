import { createSlice } from '@reduxjs/toolkit'

const initialState = 'Here is a list of anecdotes!'

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    updateNotification(_, action) {
      const message = action.payload
      return message
    }
  }
})

export const { updateNotification } = notificationSlice.actions

export const setNotification = (message, delay = 5) => {
  return dispatch => {
    dispatch(updateNotification(message))
    setTimeout(() => {
      dispatch(updateNotification(initialState))
    }, delay * 1000)
  }
}

export default notificationSlice.reducer