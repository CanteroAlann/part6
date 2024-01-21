import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        setNotification(state, action) {
            state = action.payload
            return state
        }

    }
})


export const { setNotification } = notificationSlice.actions

export const generateNotification = (message, timeOfMessafe) => {
    return async dispatch => {
        dispatch(setNotification(message))
        setTimeout(() => {
            dispatch(setNotification(''))
        }, timeOfMessafe * 1000)
    }
}
export default notificationSlice.reducer