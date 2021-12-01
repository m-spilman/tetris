import React from 'react'

export default function ScoreBoard(props) {
    return (
        <div className='score-board'>
            <div>Score {props.score}</div>
            <div>Level {props.level}</div>
            <button className='score-board-button' onClick = {(event) =>{}}>Play</button>
            <button className='score-board-button' onClick = {(event) =>{}}>Pause</button>
            
        </div>
    )
}
