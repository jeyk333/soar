import { FC } from 'react';
import dayjs from 'dayjs';

import Token from '@/assets/images/token.png';
import Card from '@/assets/images/card.png';
import Paypal from '@/assets/images/paypal.png';

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
}

const TYPES: { [key: string]: { image: string; color: string } } = {
  card: { image: Card, color: '#FFF5D9' },
  paypal: { image: Paypal, color: '#E7EDFF' },
  token: { image: Token, color: '#DCFAF8' },
};

const TransactionCard: FC<Props> = ({ transaction }) => {
  return (
    <div className="flex items-center gap-4 mb-[10px]">
      <div
        style={{ background: TYPES[transaction.type]?.color }}
        className="w-[55px] h-[55px] rounded-full flex items-center justify-center"
      >
        <img
          src={TYPES[transaction.type]?.image}
          alt={transaction.type}
          className="w-[28px] h-[28px]"
        />
      </div>
      <div>
        <p className="text-text font-medium text-base mb-2">
          {transaction.label}
        </p>
        <p className="text-text-label text-[15px] font-normal">
          {dayjs(transaction.date).format('DD MMMM YYYY')}
        </p>
      </div>
      <p
        className={`ml-auto font-medium text-base ${transaction?.status === 'profit' ? 'text-success' : 'text-error'}`}
      >
        {transaction?.status === 'profit' ? '+' : '-'} ${transaction.value}
      </p>
    </div>
  );
};

export default TransactionCard;
