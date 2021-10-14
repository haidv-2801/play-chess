import { createSlice } from '@reduxjs/toolkit';
import {PLAYER, THEME_NAME, THEMES} from '../../scripts/constant'

export const chessDefaultValue = {
  firstPlayer: PLAYER.WHITE,
  turn: PLAYER.WHITE,
  board: [],
  history: [],
  theme: THEMES[THEME_NAME.BLOOD]
};

const chess = createSlice({
  name: 'chess',

  initialState: chessDefaultValue,

  reducers: {
    updateBoard: (state, action) => {
      state.board = action.payload;
    },

    updateTurn: (state, action) => {
      state.turn = action.payload;
    },

    updateHistory: (state, action) => {
      state.history = action.payload;
    },

  },
});

export const chessActions = chess.actions;
export default chess.reducer;
