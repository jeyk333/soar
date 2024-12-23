/* eslint-disable @typescript-eslint/no-explicit-any */
import { actions } from './slice';
import {
  getUserInfo,
  getCreditCards,
  getTransactions,
  getContacts,
  getChartData,
  postUserInfo,
} from '@/services';
import { AppDispatch } from '@/store';
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

export const fetchUserInfo: any =
  () =>
  async (dispatch: AppDispatch): Promise<void> => {
    dispatch(loadingUserInfo());
    try {
      const response = await getUserInfo();
      dispatch(setUserInfo(response?.data));
    } catch (err) {
      dispatch(userInfoError());
      throw err;
    }
  };

export const fetchCreditCards: any =
  () =>
  async (dispatch: AppDispatch): Promise<void> => {
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

export const fetchTransactions: any =
  () =>
  async (dispatch: AppDispatch): Promise<void> => {
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

export const fetchContacts: any =
  () =>
  async (dispatch: AppDispatch): Promise<void> => {
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

export const fetchChartData: any =
  () =>
  async (dispatch: AppDispatch): Promise<void> => {
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

export const saveUserInfo: any =
  (payload: UserInfoType) =>
  async (dispatch: AppDispatch): Promise<void> => {
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

export const toggleSidebar: any =
  () =>
  async (dispatch: AppDispatch): Promise<void> => {
    dispatch(toggleMobileSidebar(!store.getState().user?.showMobileSidebar));
  };
