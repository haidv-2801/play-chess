const PLAYER = {
  BLACK: 0,
  WHITE: 1,
};

const CHESS_MAP = [
  ['bR', 'bN', 'bB', 'bQ', 'bK', 'bB', 'bN', 'bR'],
  ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'],
  ['--', '--', '--', '--', '--', '--', '--', '--'],
  ['--', '--', '--', '--', '--', '--', '--', '--'],
  ['--', '--', '--', '--', '--', '--', '--', '--'],
  ['--', '--', '--', '--', '--', '--', '--', '--'],
  ['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp'],
  ['wR', 'wN', 'wB', 'wQ', 'wK', 'wB', 'wN', 'wR'],
];

const CHESS_PIECES_PATH = '../assets/imgs/v{0}/{1}.png';

const CHESS_PIECES = [
  {
    wK: '&#9812;',
    wQ: '&#9813;',
    wR: '&#9814;',
    wB: '&#9815;',
    wN: '&#9816;',
    wp: '&#9817;',
    //
    bK: '&#9818;',
    bQ: '&#9819;',
    bR: '&#9820;',
    bB: '&#9821;',
    bN: '&#9822;',
    bp: '&#9823;',

    '--': null,
  },

  {
    wK: '&#9812;',
    wQ: '&#9813;',
    wR: '&#9814;',
    wB: '&#9815;',
    wN: '&#9816;',
    wp: '&#9817;',
    //
    bK: '&#9818;',
    bQ: '&#9819;',
    bR: '&#9820;',
    bB: '&#9821;',
    bN: '&#9822;',
    bp: '&#9823;',

    '--': null,
  },
];

const THEME_NAME = {
  CLASSIC: 'CLASSIC',
  WOOD: 'WOOD',
  OCEAN: 'OCEAN',
  FOREST: 'FOREST',
  BLOOD: 'BLOOD',
};

const THEMES = {
  [THEME_NAME.CLASSIC]: {
    boardBorderColor: '#666',
    lightBoxColor: '#fff',
    darkBoxColor: '#ccc',
    optionColor: '#000',
    optionHoverColor: '#999',
  },
  [THEME_NAME.WOOD]: {
    boardBorderColor: '#803E04',
    lightBoxColor: '#FFCE9E',
    darkBoxColor: '#D18B47',
    optionColor: '#803E04',
    optionHoverColor: '#311B0B',
  },
  [THEME_NAME.OCEAN]: {
    boardBorderColor: '#023850',
    lightBoxColor: '#fff',
    darkBoxColor: '#0A85AE',
    optionColor: '#023850',
    optionHoverColor: '#3385ff',
  },
  [THEME_NAME.FOREST]: {
    boardBorderColor: '#005900',
    lightBoxColor: '#CAC782',
    darkBoxColor: '#008C00',
    optionColor: '#005900',
    optionHoverColor: '#0c0',
  },
  [THEME_NAME.BLOOD]: {
    boardBorderColor: '#f3f3f3',
    lightBoxColor: '#f3f3f3',
    darkBoxColor: '#f00',
    optionColor: '#f00',
    optionHoverColor: '#f99',
  },
};

export {
  PLAYER,
  THEMES,
  CHESS_PIECES,
  THEME_NAME,
  CHESS_MAP,
  CHESS_PIECES_PATH,
};
