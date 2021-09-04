import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'session',
    initialState: {
        isLoggedIn: false,
        user: {},
        time: ''
    },
    reducers: {
        userLoggedIn: (user, { payload }) => {
            user.isLoggedIn = true
            user.user = payload
            user.time = Date.now()
        },
        userLoggedOut: (user, { payload }) => {
            user.isLoggedIn = false
            user.user = {}
            user.time = Date.now()
        }
    }
})

const { userLoggedIn, userLoggedOut } = slice.actions

export const loginUser = (user) => ({
    type: userLoggedIn.type,
    payload: user
})

export const logoutUser = (user) => ({
    type: userLoggedOut.type,
    payload: user
})

export const getUser = (state) => state.entities

export default slice.reducer