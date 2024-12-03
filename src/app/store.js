import { configureStore } from '@reduxjs/toolkit'
import cardsSlice from '../features/cards/cardsSlice.ts'

export default configureStore({
  reducer: {
    cards: cardsSlice,
  },
})