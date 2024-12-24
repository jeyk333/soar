import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import SectionWrapper from '@/components/SectionWrapper';
import {
  fetchUserInfo,
  fetchCreditCards,
  fetchTransactions,
  fetchContacts,
  fetchChartData,
} from '@/store/user/action';
import { RootState } from '@/store';
import CreditCard, { CreditCardType } from '@/components/CreditCard';
import TransactionCard, { TransactionType } from '@/components/TransactionCard';
import BarChart from '@/components/BarChart';
import PolarAreaChart from '@/components/PolarAreaChart';
import LineChart from '@/components/LineChart';
import QuickTransfer from '@/components/QuickTransfer';
import { useAppDispatch } from '@/store';

const Dashboard: FC = () => {
  const user = useSelector((root: RootState) => root.user);
  const dispatch = useAppDispatch();

  console.log(user);
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    dispatch(fetchUserInfo());
    dispatch(fetchCreditCards());
    dispatch(fetchTransactions());
    dispatch(fetchContacts());
    dispatch(fetchChartData());
  };

  return (
    <div>
      <div className="flex flex-col xl:flex-row gap-[30px]">
        <div className="w-full xl:w-8/12">
          <SectionWrapper
            title="My Cards"
            link="/credit-cards"
            linkLabel="See All"
          >
            <div className="w-full overflow-x-auto">
              <div className="flex items-center gap-5 xl:gap-[30px] min-w-[650px]">
                {user?.cards?.slice(0, 2)?.map((card: CreditCardType) => (
                  <div key={card.id} className="w-1/2">
                    <CreditCard card={card} isLoading={user?.isCardsLoading} />
                  </div>
                ))}
              </div>
            </div>
          </SectionWrapper>
        </div>
        <div className="w-full xl:w-4/12">
          <SectionWrapper title="Recent Transaction">
            <div className="bg-white px-[18px] xl:px-[25px] py-5 xl:py-[25px] rounded-[25px]">
              {user?.transactions?.map((transaction: TransactionType) => (
                <TransactionCard
                  key={transaction.id}
                  transaction={transaction}
                  isLoading={user?.isTransactionsLoading}
                />
              ))}
            </div>
          </SectionWrapper>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-[30px] mt-6">
        <div className="w-full lg:w-6/12 xl:w-8/12">
          <SectionWrapper title="Weekly Activity">
            <BarChart
              data={user?.chartData?.weeklyActivity}
              isLoading={user.isChartDataLoading}
            />
          </SectionWrapper>
        </div>
        <div className="w-full lg:w-6/12 xl:w-4/12">
          <SectionWrapper title="Expense Statistics">
            <PolarAreaChart
              data={user?.chartData?.expenseStatistics}
              isLoading={user.isChartDataLoading}
            />
          </SectionWrapper>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-[30px] mt-6">
        <div className="w-full lg:w-6/12 xl:w-5/12">
          <SectionWrapper title="Quick Transfer">
            <div className="bg-white p-[25px] rounded-[25px]">
              <QuickTransfer
                contacts={user?.contacts}
                isLoading={user?.isContactsLoading}
              />
            </div>
          </SectionWrapper>
        </div>
        <div className="w-full lg:w-6/12 xl:w-7/12">
          <SectionWrapper title="Balance History">
            <LineChart
              data={user?.chartData?.balanceHistory}
              isLoading={user.isChartDataLoading}
            />
          </SectionWrapper>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
