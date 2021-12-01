import './App.css';
import Board from './components/Board';
import { boardSize, nextSize } from './constants';
import ScoreBoard from './components/ScoreBoard';
function App() {
  const {boardWidth, boardHeight} = boardSize
  const {nextWidth, nextHeight} = nextSize

  return (
    <div className="App">
      <header className="App-header">
      <h1 className="App-title">Tetris Redux</h1>
      </header>
      <Board boardWidth={boardWidth} boardHeight={boardHeight} next= {false} color='1' />
      <Board boardWidth={nextWidth} boardHeight ={nextHeight} next= {true} color = '0'/>
      <ScoreBoard />
    
    </div>
  );
}

export default App;
