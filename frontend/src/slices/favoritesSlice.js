import { createSlice } from '@reduxjs/toolkit'

// Import the local storage functions
const localStorageFavorites =
  JSON.parse(localStorage.getItem('favorites')) || []

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: localStorageFavorites, // Load from local storage or use an empty array
  reducers: {
    addFavorite: (state, action) => {
      state.push(action.payload)
      localStorage.setItem('favorites', JSON.stringify(state)) // Save to local storage
    },
    removeFavorite: (state, action) => {
      const newState = state.filter((productId) => productId !== action.payload)
      localStorage.setItem('favorites', JSON.stringify(newState)) // Save to local storage
      return newState
    },
  },
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer
