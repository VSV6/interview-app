import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        time: ''
    },
    reducers: {
        usersAdded: (users, { payload }) => {
            users.users = payload.users
            users.time = Date.now()
        }
    }
})

const { usersAdded } = slice.actions

export const addUsers = (users) => ({
    type: usersAdded.type,
    payload: users
})

export const getUsers = (state) => state.users

export default slice.reducer