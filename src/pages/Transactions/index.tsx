import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTransactions } from '@/store/user/action';
import { RootState, AppDispatch } from '@/store';
import TransactionCard, { TransactionType } from '@/components/TransactionCard';

const Transactions: FC = () => {
  const user = useSelector((root: RootState) => root.user);
  const dispatch = useDispatch<AppDispatch>();
  console.log(user);
  useEffect(() => {
    getUserTransactions();
  }, []);

  const getUserTransactions = () => {
    dispatch(fetchTransactions());
  };
  return (
    <div className="bg-white p-6 rounded-3xl">
      {user?.transactions?.map((transaction: TransactionType) => (
        <TransactionCard key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
};

export default Transactions;
