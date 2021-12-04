import React, {useRef, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import GridSquare from "./GridSquare";
import { shapes } from "../utils";
import { moveDown } from "../actions";

export default function Board(props) {
  const game = useSelector((state) => state.game);
  const { grid, shape, rotation, x, y, isRunning, speed } = game;
  const block = shapes[shape][rotation];
  const blockColor = shape;

//--------
const currentTime = useRef()
const lastUpdateTime = useRef(0)
const passedTime = useRef(0)
const dispatch = useDispatch()



useEffect(() => {
    // console.log('useEffect')
    currentTime.current = requestAnimationFrame(update)
    
    return () => cancelAnimationFrame(currentTime.current)
}, [isRunning])


const update = time => {
    // console.log('isRunning', isRunning)

    currentTime.current = requestAnimationFrame(update)
    if (!isRunning) return
    if (!lastUpdateTime.current) {
        lastUpdateTime.current = time
    }
    const deltaTime = time - lastUpdateTime.current
    passedTime.current += deltaTime
    if (passedTime.current > speed) {
        dispatch(moveDown())
        passedTime.current = 0
    }
    lastUpdateTime.current = time
} 







  // map rows
  const gridSquares = grid.map((rowArray, row) => {
    // map columns
    return rowArray.map((square, col) => {
      // Find the block x and y on the shape grid
      // By subtracting the x and y from the col and the row we get the position of the upper left corner of the block array as if it was superimposed over the main grid
      const blockX = col - x;
      const blockY = row - y;
      let color = square;
      // Map current falling block to grid.
      // For any squares that fall on the grid we need to look at the block array and see if there is a 1 in this case we use the block color.
      if (
        blockX >= 0 &&
        blockX < block.length &&
        blockY >= 0 &&
        blockY < block.length
      ) {
        color = block[blockY][blockX] === 0 ? color : blockColor;
      }
      // Generate a unique key for every block
      const k = row * grid[0].length + col;
      // Generate a grid square
      return <GridSquare key={k} color={color} />;
    });
  });

  return <div className="grid-board">{gridSquares}</div>;
}
