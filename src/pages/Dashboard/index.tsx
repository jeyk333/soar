import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SectionWrapper from '@/components/SectionWrapper';
import { fetchCreditCards, fetchTransactions } from '@/store/user/action';
import { RootState, AppDispatch } from '@/store';
import CreditCard, { CreditCardType } from '@/components/CreditCard';
import TransactionCard, { TransactionType } from '@/components/TransactionCard';
import BarChart from '@/components/BarChart';
import PolarAreaChart from '@/components/PolarAreaChart';

const Dashboard: FC = () => {
  const user = useSelector((root: RootState) => root.user);
  const dispatch = useDispatch<AppDispatch>();
  console.log(user);
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    dispatch(fetchCreditCards());
    dispatch(fetchTransactions());
  };
  return (
    <div>
      <div className="flex gap-[30px]">
        <div className="w-8/12">
          <SectionWrapper
            title="My Cards"
            link="/credit-cards"
            linkLabel="See All"
          >
            <div className="flex items-center gap-[30px]">
              {user?.cards?.map((card: CreditCardType) => (
                <CreditCard key={card.id} card={card} />
              ))}
            </div>
          </SectionWrapper>
        </div>
        <div className="w-4/12">
          <SectionWrapper title="Recent Transaction">
            <div className="bg-white p-[25px] rounded-[25px]">
              {user?.transactions?.map((transaction: TransactionType) => (
                <TransactionCard
                  key={transaction.id}
                  transaction={transaction}
                />
              ))}
            </div>
          </SectionWrapper>
        </div>
      </div>
      <div className="flex gap-[30px] mt-6">
        {' '}
        <div className="w-8/12">
          {' '}
          <SectionWrapper title="Weekly Activity">
            {' '}
            <div className="bg-white p-[25px] rounded-[25px]">
              <BarChart />
            </div>
          </SectionWrapper>
        </div>
        <div className="w-4/12">
          <SectionWrapper title="Expense Statistics">
            {' '}
            <div className="bg-white p-[25px] rounded-[25px]">
              <PolarAreaChart />
            </div>
          </SectionWrapper>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
