import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FC } from 'react';

import Layout from '../layout';
import Dashboard from '../pages/Dashboard';

const AppRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
