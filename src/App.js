import './App.css';
import GridSquare from './components/GridSquare';
import Board from './components/Board';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="App-title">Tetris Redux</h1>
      </header>
      <Board/>
    </div>
  );
}

export default App;
