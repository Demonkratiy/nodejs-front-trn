import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { urlJoin } from 'url-join-ts';
// import { userAPI } from './userAPI'

interface User {
    name: string,
    email: string
}

const backendURL = 'http://localhost:3000'

export const createUserThunk = createAsyncThunk(
  'users/new',
  async (user: User) => {
    console.log("user is: ", user)
    const response = await fetch(urlJoin(backendURL, 'users', 'new'), {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(user)}) 
    if (response.status !== 200) {
      throw new Error ("fetch error test")
    }
  }
)

interface UsersState {
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
  status: 'idle',
} as UsersState

// Then, handle actions in your reducers:
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder.addCase(createUserThunk.fulfilled, (state) => {
      state.status = "succeeded"
    })
    builder.addCase(createUserThunk.rejected, (state) => {
      state.status = "failed"
    })
  },
})

console.log(usersSlice)

export const usersReducer = usersSlice.reducer