/* eslint-disable no-useless-catch */
import axios from 'axios';

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
