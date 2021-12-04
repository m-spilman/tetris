import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { moveLeft, moveRight, rotate, moveDown, gameOver  } from "../actions";

export default function Controls(props) {
    const state = useSelector((state) => state.game)
    const {gameOver, isRunning} = state
    const dispatch = useDispatch();

    const handleKeyPress = useCallback((event)=>{
        console.log('event be called')
        switch (event.key) {
            case "ArrowDown":
              dispatch(moveDown());
              return;
            case "ArrowRight":
              dispatch(moveRight());
              return;
            case "ArrowLeft":
              dispatch(moveLeft());
              return;
            case "ArrowUp":
              dispatch(rotate());
              return;
            default:
              return;
      }
      }, [])


  useEffect(() => {
      if(isRunning && !gameOver){
        console.log('game over', gameOver)
        document.addEventListener("keydown", handleKeyPress)
      }
      else{
        document.removeEventListener("keydown", handleKeyPress)
      }
    // return () => window.removeEventListener('keydown', handleKeyPress)

  }, [isRunning, gameOver] );
 


   

  

  return (
    <div className="controls">
      <div> Use the keyboard for movement</div>
      <div>Up arrow rotates the block</div>
    </div>
  );
}
