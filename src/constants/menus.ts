import { ElementType } from 'react';

import Home from '../components/Icons/Home';
import Transactions from '../components/Icons/Transactions';
import Accounts from '../components/Icons/Accounts';
import Investments from '../components/Icons/Investments';
import CreditCards from '../components/Icons/CreditCards';
import Loans from '../components/Icons/Loans';
import Services from '../components/Icons/Services';
import Privileges from '../components/Icons/Privileges';
import Settings from '../components/Icons/Settings';

export interface MenuType {
  id: number;
  label: string;
  path: string;
  icon: ElementType;
}

export const MENUS: MenuType[] = [
  { id: 0, label: 'Dashboard', path: '/', icon: Home },
  { id: 1, label: 'Transactions', path: '/transactions', icon: Transactions },
  { id: 2, label: 'Accounts', path: '/accounts', icon: Accounts },
  { id: 3, label: 'Investments', path: '/investments', icon: Investments },
  { id: 4, label: 'Credit Cards', path: '/credit-cards', icon: CreditCards },
  { id: 5, label: 'Loans', path: '/loans', icon: Loans },
  { id: 6, label: 'Services', path: '/services', icon: Services },
  { id: 7, label: 'My Privileges', path: '/my-privileges', icon: Privileges },
  { id: 8, label: 'Setting', path: '/setting', icon: Settings },
];
