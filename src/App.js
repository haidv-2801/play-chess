import './App.css';
import Board from './components/Board'
import {THEME_NAME} from '../src/scripts/constant'

function App() {
  return (
    <Board theme={THEME_NAME.WOOD}/>
  );
}

export default App;
