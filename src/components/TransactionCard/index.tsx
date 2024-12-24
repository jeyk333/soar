import { FC } from 'react';
import dayjs from 'dayjs';

import Token from '@/assets/images/token.png';
import Card from '@/assets/images/card.png';
import Paypal from '@/assets/images/paypal.png';
import TransactionCardLoader from '../SkeletonLoader/TransactionCard';

export interface TransactionType {
  id: number;
  value: string;
  label: string;
  type: string;
  date: string;
  status: string;
}

interface Props {
  transaction: TransactionType;
  isLoading: boolean;
}

const TYPES: { [key: string]: { image: string; color: string } } = {
  card: { image: Card, color: '#FFF5D9' },
  paypal: { image: Paypal, color: '#E7EDFF' },
  token: { image: Token, color: '#DCFAF8' },
};

const TransactionCard: FC<Props> = ({ transaction, isLoading }) => {
  if (isLoading) return <TransactionCardLoader />;
  return (
    <div className="flex items-center gap-4 mb-[10px]">
      <div
        style={{ background: TYPES[transaction.type]?.color }}
        className="w-[50px] md:w-[55px] h-[50px] md:h-[55px] rounded-full flex items-center justify-center"
      >
        <img
          src={TYPES[transaction.type]?.image}
          alt={transaction.type}
          className="w-[25px] md:w-[28px] h-[25px] md:h-[28px]"
        />
      </div>
      <div>
        <p className="text-text font-medium text-sm 2xl:text-base mb-1 md:mb-2">
          {transaction.label}
        </p>
        <p className="text-text-label text-xs md:text-[15px] font-normal">
          {dayjs(new Date(transaction.date)).format('DD MMMM YYYY')}
        </p>
      </div>
      <p
        className={`ml-auto font-medium text-[11px] md:text-base ${transaction?.status === 'profit' ? 'text-success' : 'text-error'}`}
      >
        {transaction?.status === 'profit' ? '+' : '-'} ${transaction.value}
      </p>
    </div>
  );
};

export default TransactionCard;
