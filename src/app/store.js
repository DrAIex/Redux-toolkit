import { configureStore } from '@reduxjs/toolkit'
import cardsSlice from '../features/cards/cardsSlice'

export default configureStore({
  reducer: {
    cards: cardsSlice,
  },
})