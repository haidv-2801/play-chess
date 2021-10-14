import { configureStore } from '@reduxjs/toolkit';
import chessReducer from './slices/ChessSlice';

const rootReducer = {
  chess: chessReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
