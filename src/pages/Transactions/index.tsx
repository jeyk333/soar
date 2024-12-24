import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { fetchTransactions } from '@/store/user/action';
import { RootState } from '@/store';
import TransactionCard, { TransactionType } from '@/components/TransactionCard';
import { useAppDispatch } from '@/store';

const Transactions: FC = () => {
  const user = useSelector((root: RootState) => root.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getUserTransactions();
  }, []);

  const getUserTransactions = () => {
    dispatch(fetchTransactions());
  };
  return (
    <div className="bg-white p-0 md:p-6 rounded-3xl">
      {user?.transactions?.map((transaction: TransactionType) => (
        <TransactionCard
          key={transaction.id}
          transaction={transaction}
          isLoading={user?.isTransactionsLoading}
        />
      ))}
    </div>
  );
};

export default Transactions;
