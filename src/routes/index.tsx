import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FC, lazy, Suspense } from 'react';

const Layout = lazy(() => import('@/layout'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Transactions = lazy(() => import('@/pages/Transactions'));
const Accounts = lazy(() => import('@/pages/Accounts'));
const Investments = lazy(() => import('@/pages/Investments'));
const CreditCards = lazy(() => import('@/pages/CreditCards'));
const Loans = lazy(() => import('@/pages/Loans'));
const Services = lazy(() => import('@/pages/Services'));
const MyPrivileges = lazy(() => import('@/pages/MyPrivileges'));
const Setting = lazy(() => import('@/pages/Setting'));

const AppRoutes: FC = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <p className="flex h-screen items-center justify-center text-xl font-semibold">
            Loading...
          </p>
        }
      >
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
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
