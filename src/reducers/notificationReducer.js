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

let previousNotification;

export const setNotification = (message, delay = 5) => {
  return dispatch => {
    dispatch(updateNotification(message))
    if (!previousNotification) {
      previousNotification = setTimeout(() => {
        dispatch(updateNotification(initialState))
      }, delay * 1000)
    } else {
      setTimeout(() => {
        dispatch(updateNotification(initialState))
      }, delay * 1000)
      clearTimeout(previousNotification)
      previousNotification = null
    }
  }
}

export default notificationSlice.reducer