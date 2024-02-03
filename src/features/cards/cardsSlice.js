import { createSlice } from '@reduxjs/toolkit'

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: [],
  reducers: {
    addCard: (state, action) => {
      state.push({
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        imageUrl: action.payload.imageUrl,
        timestamp: new Date().toString(),
      });
    },
    rmCard: (state, action) => {
      return state.filter((card) => card.id !== action.payload.id)
    },
    changeCard: (state, action) => {
      console.log('state, action', state, action)
      const index = state.findIndex((card) => {
        console.log('index', index)
        if (index !== -1) {
          state[index] = action.payload
        }
      })
    }
  },
})

// Action creators are generated for each case reducer function
export const { addCard, rmCard, changeCard } = cardsSlice.actions

export default cardsSlice.reducer


// /app/store.js
// /components/Card.js
// /features/cards/cardsSlice.js

// store.js
// import { configureStore } from '@reduxjs/toolkit'
// import cardsSlice from '../features/cards/cardsSlice'

// export default configureStore({
//   reducer: {
//     card: cardsSlice,
//   },
// })


// Card.js
// function Card({ card }) {
//   return <div>{card.description}</div>;
//  }
 
//  export default Card;


//  cardsSlice.js
//  mport { createSlice } from '@reduxjs/toolkit'

// export const cardsSlice = createSlice({
//   name: 'cards',
//   initialState: [],
//   reducers: {

//     addCard: (state, action) => {
//       state.push({
//         id: Date.now(),
//         description: action.payload,
//         timestamp: new Date().toString(),
//       });
//     },
//   },
// })

// // Action creators are generated for each case reducer function
// export const { addCard } = cardsSlice.actions

// export default cardsSlice.reducer
 