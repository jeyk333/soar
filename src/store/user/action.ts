/* eslint-disable @typescript-eslint/no-explicit-any */
import { actions } from './slice';
import { getCreditCards, getTransactions } from '@/services';
import { AppDispatch } from '@/store';

const {
  loadingCards,
  setCards,
  cardsError,
  loadingTransactions,
  transactionsError,
  setTransactions,
} = actions;

export const fetchCreditCards: any =
  () =>
  async (dispatch: AppDispatch): Promise<void> => {
    dispatch(loadingCards());
    try {
      const response = await getCreditCards();
      dispatch(setCards(response?.data));
    } catch (err) {
      dispatch(cardsError());
      throw err;
    }
  };

export const fetchTransactions: any =
  () =>
  async (dispatch: AppDispatch): Promise<void> => {
    dispatch(loadingTransactions());
    try {
      const response = await getTransactions();
      dispatch(setTransactions(response?.data));
    } catch (err) {
      dispatch(transactionsError());
      throw err;
    }
  };
