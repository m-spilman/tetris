import React from 'react'
import GridSquare from './GridSquare'

export default function Board(props) {
  
    const {boardWidth, boardHeight, color, next} = props
    const boardGrid = []

    for(let rowIndex=0; rowIndex < boardHeight; rowIndex++){
        boardGrid.push([])
        for(let columnIndex = 0; columnIndex < boardWidth; columnIndex++ ){
            boardGrid[rowIndex].push(<GridSquare key={`${rowIndex} ${columnIndex}`} color = {color}/>)
        }
    }

    return (
        <div className = {next ? 'next-block' : 'grid-board'}>
            {boardGrid}
            
        </div>
    )
}
