import './App.css';
import Board from './components/Board';
import { boardSize, nextSize } from './constants';
function App() {
  const {boardWidth, boardHeight} = boardSize
  const {nextWidth, nextHeight} = nextSize
  console.log('----------', nextSize)
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="App-title">Tetris Redux</h1>
      </header>
      <Board boardWidth={boardWidth} boardHeight={boardHeight} next= {false} color='1' />
      <Board boardWidth={nextWidth} boardHeight ={nextHeight} next= {true} color = '0'/>
    
    </div>
  );
}

export default App;
