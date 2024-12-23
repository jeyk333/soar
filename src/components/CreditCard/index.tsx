import { FC } from 'react';

import CardChipWhite from '@/assets/images/card-chip-white.png';
import CardChipDark from '@/assets/images/card-chip-dark.png';
import CardType from '@/assets/images/card-type.png';
import CreditCardLoader from '../SkeletonLoader/CreditCardLoader';

export interface CreditCardType {
  id: number;
  balance: string;
  name: string;
  valid: string;
  number: string;
  type: string;
}

interface Props {
  card: CreditCardType;
  isLoading: boolean;
}

const CreditCard: FC<Props> = ({ card, isLoading }) => {
  if (isLoading) return <CreditCardLoader />;

  return (
    <div
      className={`rounded-[25px] overflow-hidden font-lato w-full ${card.type === 'dark' ? 'bg-card-dark' : 'bg-white border border-card-border'}`}
    >
      <div className="pt-5 md:pt-6 px-5 md:px-6">
        <div className="flex justify-between mb-5 md:mb-[33px]">
          <div>
            <p
              className={`text-[11px] md:text-xs ${card.type === 'dark' ? 'text-white' : 'text-text-label'}`}
            >
              Balance
            </p>
            <p
              className={`text-base md:text-xl font-semibold ${card.type === 'dark' ? 'text-white' : 'text-primary'}`}
            >
              ${card.balance}
            </p>
          </div>
          <img
            className="w-[29px] md:w-[35px] h-[29px] md:h-[35px]"
            src={card?.type === 'dark' ? CardChipWhite : CardChipDark}
            alt="Card Chip"
          />
        </div>
        <div className="flex">
          <div className="w-1/2">
            <p
              className={`text-[10px] md:text-xs ${card.type === 'dark' ? 'text-white opacity-75' : 'text-text-label'}`}
            >
              CARD HOLDER
            </p>
            <p
              className={`leading-[18px] font-semibold text-[13px] md:text-[15px] mt-px ${card.type === 'dark' ? 'text-white' : 'text-primary'}`}
            >
              {card.name}
            </p>
          </div>
          <div className="w-1/2">
            <p
              className={`text-[10px] md:text-xs ${card.type === 'dark' ? 'text-white opacity-75' : 'text-text-label'}`}
            >
              VALID THRU
            </p>
            <p
              className={`leading-[18px] font-semibold text-[13px] md:text-[15px] mt-px ${card.type === 'dark' ? 'text-white' : 'text-primary'}`}
            >
              {card.valid}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`px-5 md:px-6 py-4 md:py-5 flex items-center justify-between ${card.type === 'dark' ? 'bg-card-dark-footer' : 'bg-white border-t border-card-border'} mt-[16.11px] md:mt-[35.11px]`}
      >
        <p
          className={`text-[15px] md:text-[22px] font-semibold ${card.type === 'dark' ? 'text-white' : 'text-primary'}`}
        >
          {card.number}
        </p>
        <img
          src={CardType}
          alt="Card Name"
          className="w-[27px] md:w-[44px] h-[18px] md:h-[30px]"
        />
      </div>
    </div>
  );
};

export default CreditCard;
