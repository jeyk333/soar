import { configureStore } from '@reduxjs/toolkit';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import { persistReducer, persistStore } from 'redux-persist';

import reducers from './reducers';

const storage = createWebStorage('local');

const persistConfig = {
  key: 'root',
  storage,
};

// Persist reducer
const persistedReducer = persistReducer(persistConfig, reducers);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const middleware = (getDefaultMiddleware: any) => {
  return getDefaultMiddleware({
    serializableCheck: false,
  });
};

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

// Persistor
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
