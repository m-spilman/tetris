import React from 'react'
import GridSquare from './GridSquare'
import { boardSize } from '../constants'

export default function Board() {

    const {width, height} = boardSize
    const boardGrid = []

    for(let rowIndex=0; rowIndex < height; rowIndex++){
        boardGrid.push([])
        for(let columnIndex = 0; columnIndex < width; columnIndex++ ){
            boardGrid[rowIndex].push(<GridSquare key={`${rowIndex} ${columnIndex}`} color ='1'/>)
        }
    }

    return (
        <div className = 'grid-board'>
            {boardGrid}
            
        </div>
    )
}
