import { ThunkAction, Action } from '@reduxjs/toolkit';

import { actions } from './slice';
import {
  getUserInfo,
  getCreditCards,
  getTransactions,
  getContacts,
  getChartData,
  postUserInfo,
} from '@/services';
import { RootState } from '@/store';
import { UserInfoType } from './slice';
import { delay } from '@/utils/delay';
import { store } from '@/store';

const {
  loadingUserInfo,
  setUserInfo,
  userInfoError,
  loadingCards,
  setCards,
  cardsError,
  loadingTransactions,
  transactionsError,
  setTransactions,
  loadingContacts,
  setContacts,
  contactsError,
  loadingChartData,
  setChartData,
  ChartDataError,
  toggleMobileSidebar,
} = actions;

export const fetchUserInfo =
  (): ThunkAction<Promise<void>, RootState, unknown, Action<string>> =>
  async (dispatch) => {
    dispatch(loadingUserInfo());
    try {
      const response = await getUserInfo();
      dispatch(setUserInfo(response?.data));
    } catch (err) {
      dispatch(userInfoError());
      throw err;
    }
  };

export const fetchCreditCards =
  (): ThunkAction<Promise<void>, RootState, unknown, Action<string>> =>
  async (dispatch) => {
    dispatch(loadingCards());
    try {
      await delay(1500);
      const response = await getCreditCards();
      dispatch(setCards(response?.data));
    } catch (err) {
      dispatch(cardsError());
      throw err;
    }
  };

export const fetchTransactions =
  (): ThunkAction<Promise<void>, RootState, unknown, Action<string>> =>
  async (dispatch) => {
    dispatch(loadingTransactions());
    try {
      await delay(1500);
      const response = await getTransactions();
      dispatch(setTransactions(response?.data));
    } catch (err) {
      dispatch(transactionsError());
      throw err;
    }
  };

export const fetchContacts =
  (): ThunkAction<Promise<void>, RootState, unknown, Action<string>> =>
  async (dispatch) => {
    dispatch(loadingContacts());
    try {
      await delay(1500);
      const response = await getContacts();
      dispatch(setContacts(response?.data));
    } catch (err) {
      dispatch(contactsError());
      throw err;
    }
  };

export const fetchChartData =
  (): ThunkAction<Promise<void>, RootState, unknown, Action<string>> =>
  async (dispatch) => {
    dispatch(loadingChartData());
    try {
      await delay(1500);
      const response = await getChartData();
      dispatch(setChartData(response?.data));
    } catch (err) {
      dispatch(ChartDataError());
      throw err;
    }
  };

export const saveUserInfo =
  (
    payload: UserInfoType
  ): ThunkAction<Promise<void>, RootState, unknown, Action<string>> =>
  async (dispatch) => {
    dispatch(loadingUserInfo());
    try {
      await delay(1500);
      const response = await postUserInfo(payload);
      dispatch(setUserInfo(response?.data));
    } catch (err) {
      dispatch(userInfoError());
      throw err;
    }
  };

export const toggleSidebar =
  (): ThunkAction<Promise<void>, RootState, unknown, Action<string>> =>
  async (dispatch) => {
    dispatch(toggleMobileSidebar(!store.getState().user?.showMobileSidebar));
  };
