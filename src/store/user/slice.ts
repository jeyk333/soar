import { createSlice } from '@reduxjs/toolkit';

import { CreditCardType } from '@/components/CreditCard';
import { TransactionType } from '@/components/TransactionCard';
import { ContactType } from '@/components/ContactCard';

export interface UserInfoType {
  id?: number;
  username: string;
  name: string;
  email: string;
  image: string;
  password: string;
  dob: string;
  address: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
}

interface StateType {
  user: UserInfoType | null;
  isLoading: boolean;
  isCardsLoading: boolean;
  isTransactionsLoading: boolean;
  isContactsLoading: boolean;
  cards: CreditCardType[];
  transactions: TransactionType[];
  contacts: ContactType[];
}

const initialState: StateType = {
  user: null,
  isLoading: false,
  isCardsLoading: false,
  isTransactionsLoading: false,
  isContactsLoading: false,
  cards: [],
  transactions: [],
  contacts: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loadingUserInfo(state) {
      state.isLoading = true;
    },
    setUserInfo(state, action) {
      state.isLoading = false;
      state.user = action.payload.data;
    },
    userInfoError(state) {
      state.isLoading = false;
    },
    loadingCards(state) {
      state.isCardsLoading = true;
    },
    setCards(state, action) {
      state.isCardsLoading = false;
      state.cards = action.payload.data;
    },
    cardsError(state) {
      state.isCardsLoading = false;
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
    loadingContacts(state) {
      state.isContactsLoading = true;
    },
    setContacts(state, action) {
      state.isContactsLoading = false;
      state.contacts = action.payload.data;
    },
    contactsError(state) {
      state.isContactsLoading = false;
    },
  },
});

export const actions = userSlice.actions;

export default userSlice.reducer;
