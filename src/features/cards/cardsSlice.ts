import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Card {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  timestamp: string;
 }
 
 // Define the state type
 interface CardsState {
  cards: Card[];
  isCreateModalOpen: boolean;
  isChangeModalOpen: boolean;
 }

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
    isCreateModalOpen: false,
    isChangeModalOpen: false,
  } as CardsState,
  reducers: {
    toggleCreateModal: (state) => {
      state.isCreateModalOpen = !state.isCreateModalOpen;
    },
    toggleChangeModal: (state) => {
      state.isChangeModalOpen = !state.isChangeModalOpen;
    },
    addCard: (state, action: PayloadAction<Card>) => {
      // return [...state.cards, action.payload];
      state.cards.push(action.payload);
      state.isCreateModalOpen = !state.isCreateModalOpen;
    },
    rmCard: (state, action: PayloadAction<{ id: number }>) => {
      // return state.cards.filter((card) => card.id !== action.payload.id)
      state.cards = state.cards.filter(card => card.id !== action.payload.id);
    },
    changeCard: (state, action: PayloadAction<Card>) => {
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
