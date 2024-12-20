import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isTransactionsLoading: false,
  cards: [],
  transactions: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loadingCards(state) {
      state.isLoading = true;
    },
    setCards(state, action) {
      state.isLoading = false;
      state.cards = action.payload.data;
    },
    cardsError(state) {
      state.isLoading = false;
    },
    loadingTransactions(state) {
      state.isTransactionsLoading = true;
    },
    setTransactions(state, action) {
      state.isTransactionsLoading = false;
      state.transactions = action.payload.data;
    },
    transactionsError(state) {
      state.isTransactionsLoading = false;
    },
  },
});

export const actions = userSlice.actions;

export default userSlice.reducer;
