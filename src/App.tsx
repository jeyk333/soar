import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import AppRoutes from './routes';
import { store, persistor } from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRoutes />
          <ToastContainer />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
