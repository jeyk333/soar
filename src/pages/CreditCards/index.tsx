import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SectionWrapper from '@/components/SectionWrapper';
import { fetchCreditCards } from '@/store/user/action';
import { RootState, AppDispatch } from '@/store';
import CreditCard, { CreditCardType } from '@/components/CreditCard';

const CreditCards: FC = () => {
  const user = useSelector((root: RootState) => root.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    dispatch(fetchCreditCards());
  };
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-[30px]">
        <div className="w-full">
          <SectionWrapper title="My Cards">
            <div className="flex items-center flex-col lg:flex-row flex-wrap gap-[30px]">
              {user?.cards?.map((card: CreditCardType) => (
                <div key={card.id} className="w-full lg:w-[47%] xl:w-[31%]">
                  <CreditCard card={card} isLoading={user?.isCardsLoading} />
                </div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </div>
    </div>
  );
};

export default CreditCards;
