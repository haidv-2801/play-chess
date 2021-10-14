import React, { useMemo } from 'react';
import Square from './Square';
import {
  THEME_NAME,
  THEMES,
  CHESS_MAP,
  CHESS_PIECES,
  CHESS_PIECES_PATH,
} from '../scripts/constant';
import { format } from 'react-string-format';
import { importAllImg } from '../scripts/commonFunction';

const IMAGES = importAllImg(require.context('../assets/imgs/v1', false, /\.(png|jpe?g|svg)$/));

const Board = (props) => {
  const { theme } = props;

  const {
    boardBorderColor,
    lightBoxColor,
    darkBoxColor,
    optionColor,
    optionHoverColor,
  } = THEMES[theme];

  const fake_path = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png';

  const renderBoard = () => {
    const _map = CHESS_MAP.map((row, idr) => (
      <div className="row">
        {' '}
        {row.map((cell, idc) => {
          const _cellBgColor = (idc + idr) % 2 ? darkBoxColor : lightBoxColor;
          return (
            <Square
              style={{
                backgroundImage:
                  `url(${format(CHESS_PIECES_PATH, 1, cell)})`,
                backgroundColor: _cellBgColor,
              }}
            />
          );
        })}
      </div>
    ));

    return _map;
  };

  const renderBoardMemo = useMemo(() => renderBoard(), [theme]);

  return (
    <div style={{ borderColor: boardBorderColor }} id="board">
      {renderBoardMemo}
    </div>
  );
};

export default Board;
