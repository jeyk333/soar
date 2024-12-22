import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FC } from 'react';

import Layout from '@/layout';
import Dashboard from '@/pages/Dashboard';
import Transactions from '@/pages/Transactions';
import Accounts from '@/pages/Accounts';
import Investments from '@/pages/Investments';
import CreditCards from '@/pages/CreditCards';
import Loans from '@/pages/Loans';
import Services from '@/pages/Services';
import MyPrivileges from '@/pages/MyPrivileges';
import Setting from '@/pages/Setting';

const AppRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/credit-cards" element={<CreditCards />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/services" element={<Services />} />
          <Route path="/my-privileges" element={<MyPrivileges />} />
          <Route path="/setting" element={<Setting />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
