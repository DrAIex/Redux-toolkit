import { createSlice } from '@reduxjs/toolkit'

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
    isCreateModalOpen: false,
    isChangeModalOpen: false,
  },
  reducers: {
    toggleCreateModal: (state) => {
      state.isCreateModalOpen = !state.isCreateModalOpen;
    },
    toggleChangeModal: (state) => {
      state.isChangeModalOpen = !state.isChangeModalOpen;
    },
    addCard: (state, action) => {
      // return [...state.cards, action.payload];
      state.cards.push(action.payload);
      state.isCreateModalOpen = !state.isCreateModalOpen;
    },
    rmCard: (state, action) => {
      // return state.cards.filter((card) => card.id !== action.payload.id)
      state.cards = state.cards.filter(card => card.id !== action.payload.id);
    },
    changeCard: (state, action) => {
      const { id, ...changes } = action.payload;
      const cardToUpdate = state.cards.find(card => card.id === id);
      if (cardToUpdate) {
         Object.assign(cardToUpdate, changes);
      }
      state.isChangeModalOpen = !state.isChangeModalOpen;
     },
  },
})

export const { 
  addCard, 
  rmCard, 
  changeCard, 
  toggleCreateModal,
  toggleChangeModal
} = cardsSlice.actions

export default cardsSlice.reducer
