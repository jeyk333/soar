import { FC } from 'react';

import CardChipWhite from '@/assets/images/card-chip-white.png';
import CardChipDark from '@/assets/images/card-chip-dark.png';
import CardType from '@/assets/images/card-type.png';

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
}

const CreditCard: FC<Props> = ({ card }) => {
  return (
    <div
      className={`rounded-[25px] overflow-hidden font-lato w-full ${card.type === 'dark' ? 'bg-card-dark' : 'bg-white border border-card-border'}`}
    >
      <div className="p-6">
        <div className="flex justify-between mb-[33px]">
          <div>
            <p
              className={`text-xs ${card.type === 'dark' ? 'text-white' : 'text-text-label'}`}
            >
              Balance
            </p>
            <p
              className={`text-xl font-semibold ${card.type === 'dark' ? 'text-white' : 'text-primary'}`}
            >
              ${card.balance}
            </p>
          </div>
          <img
            className="w-[35px] h-[35px]"
            src={card?.type === 'dark' ? CardChipWhite : CardChipDark}
            alt="Card Chip"
          />
        </div>
        <div className="flex">
          <div className="w-1/2">
            <p
              className={`text-xs ${card.type === 'dark' ? 'text-white opacity-75' : 'text-text-label'}`}
            >
              CARD HOLDER
            </p>
            <p
              className={`leading-[18px] font-semibold text-[15px] mt-px ${card.type === 'dark' ? 'text-white' : 'text-primary'}`}
            >
              {card.name}
            </p>
          </div>
          <div className="w-1/2">
            <p
              className={`text-xs ${card.type === 'dark' ? 'text-white opacity-75' : 'text-text-label'}`}
            >
              VALID THRU
            </p>
            <p
              className={`leading-[18px] font-semibold text-[15px] mt-px ${card.type === 'dark' ? 'text-white' : 'text-primary'}`}
            >
              {card.valid}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`px-6 py-5 flex items-center justify-between ${card.type === 'dark' ? 'bg-card-dark-footer' : 'bg-white border-t border-card-border'} mt-[35px]`}
      >
        <p
          className={`text-[22px] font-semibold ${card.type === 'dark' ? 'text-white' : 'text-primary'}`}
        >
          {card.number}
        </p>
        <img src={CardType} alt="Card Name" className="w-[44px] h-[30px]" />
      </div>
    </div>
  );
};

export default CreditCard;
