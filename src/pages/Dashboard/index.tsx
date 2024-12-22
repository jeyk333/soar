import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SectionWrapper from '@/components/SectionWrapper';
import {
  fetchUserInfo,
  fetchCreditCards,
  fetchTransactions,
  fetchContacts,
} from '@/store/user/action';
import { RootState, AppDispatch } from '@/store';
import CreditCard, { CreditCardType } from '@/components/CreditCard';
import TransactionCard, { TransactionType } from '@/components/TransactionCard';
import BarChart from '@/components/BarChart';
import PolarAreaChart from '@/components/PolarAreaChart';
import LineChart from '@/components/LineChart';
import ContactSlider from '@/components/ContactSlider';

const Dashboard: FC = () => {
  const user = useSelector((root: RootState) => root.user);
  const dispatch = useDispatch<AppDispatch>();
  console.log(user);
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    dispatch(fetchUserInfo());
    dispatch(fetchCreditCards());
    dispatch(fetchTransactions());
    dispatch(fetchContacts());
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-[30px]">
        <div className="w-full md:w-8/12">
          <SectionWrapper
            title="My Cards"
            link="/credit-cards"
            linkLabel="See All"
          >
            <div className="w-full overflow-x-auto">
              <div className="flex items-center gap-5 md:gap-[30px] min-w-[650px]">
                {user?.cards?.slice(0, 2)?.map((card: CreditCardType) => (
                  <div key={card.id} className="w-1/2">
                    <CreditCard card={card} />
                  </div>
                ))}
              </div>
            </div>
          </SectionWrapper>
        </div>
        <div className="w-full md:w-4/12">
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
      <div className="flex flex-col md:flex-row gap-[30px] mt-6">
        <div className="w-full md:w-8/12">
          <SectionWrapper title="Weekly Activity">
            <div className="bg-white p-[25px] rounded-[25px]">
              <BarChart />
            </div>
          </SectionWrapper>
        </div>
        <div className="w-full md:w-4/12">
          <SectionWrapper title="Expense Statistics">
            <div className="bg-white p-[25px] rounded-[25px]">
              <PolarAreaChart />
            </div>
          </SectionWrapper>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-[30px] mt-6">
        <div className="w-full md:w-5/12">
          <SectionWrapper title="Quick Transfer">
            <div className="bg-white p-[25px] rounded-[25px]">
              <ContactSlider contacts={user?.contacts} />
            </div>
          </SectionWrapper>
        </div>
        <div className="w-full md:w-7/12">
          <SectionWrapper title="Balance History">
            <div className="bg-white p-[25px] rounded-[25px]">
              <LineChart />
            </div>
          </SectionWrapper>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
