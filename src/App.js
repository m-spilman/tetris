import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";

import "./App.css";

import Board from "./components/Board";

import ScoreBoard from "./components/ScoreBoard";
import Controls from "./components/Controls";
import MessagePopup from "./components/MessagePopup";
import NextBlock from "./components/NextBlock";

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tetris Redux</h1>
        </header>
        <Board />
        <NextBlock />
        <ScoreBoard />
        <Controls />
        <MessagePopup />
      </div>
    </Provider>
  );
}

export default App;
