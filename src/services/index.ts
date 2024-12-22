/* eslint-disable no-useless-catch */
import axios from 'axios';

import { UserInfoType } from '@/store/user/slice';

export const getUserInfo = async () => {
  try {
    const resp = await axios.get('/user-info.json');
    return resp;
  } catch (err) {
    throw err;
  }
};

export const getCreditCards = async () => {
  try {
    const resp = await axios.get('/cards.json');
    return resp;
  } catch (err) {
    throw err;
  }
};

export const getTransactions = async () => {
  try {
    const resp = await axios.get('/transactions.json');
    return resp;
  } catch (err) {
    throw err;
  }
};

export const getContacts = async () => {
  try {
    const resp = await axios.get('/contacts.json');
    return resp;
  } catch (err) {
    throw err;
  }
};

export const postUserInfo = async (payload: UserInfoType) => {
  try {
    console.log(payload);
    const resp = await axios.post('/user-info.json', payload);
    console.log(resp);
    return resp;
  } catch (err) {
    throw err;
  }
};
