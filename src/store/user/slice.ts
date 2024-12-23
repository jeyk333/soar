import { createSlice } from '@reduxjs/toolkit';

import { CreditCardType } from '@/components/CreditCard';
import { TransactionType } from '@/components/TransactionCard';
import { ContactType } from '@/components/ContactCard';
import { BarChartDataType } from '@/components/BarChart';

export interface ChartDataType {
  labels: string[];
  values: number[];
}

export interface ChartsDataType {
  weeklyActivity: BarChartDataType;
  expenseStatistics: ChartDataType;
  balanceHistory: ChartDataType;
}

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
  isChartDataLoading: boolean;
  cards: CreditCardType[];
  transactions: TransactionType[];
  contacts: ContactType[];
  chartData: ChartsDataType | null;
  showMobileSidebar: boolean;
}

const initialState: StateType = {
  user: null,
  isLoading: false,
  isCardsLoading: false,
  isTransactionsLoading: false,
  isContactsLoading: false,
  isChartDataLoading: false,
  cards: [],
  transactions: [],
  contacts: [],
  chartData: null,
  showMobileSidebar: false,
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
    loadingChartData(state) {
      state.isChartDataLoading = true;
    },
    setChartData(state, action) {
      state.isChartDataLoading = false;
      state.chartData = action.payload.data;
    },
    ChartDataError(state) {
      state.isChartDataLoading = false;
    },
    toggleMobileSidebar(state, action) {
      state.showMobileSidebar = action.payload;
    },
  },
});

export const actions = userSlice.actions;

export default userSlice.reducer;
