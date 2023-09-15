import React from 'react'
import "./ScoreBoard.css";

const ScoreBoard = ({xScore,oScore}) => {
  return (
    <div className="scoreboard">
        <span className="x-score"> X-{xScore}</span>
        <span className="o-score"> O-{oScore}</span>
    </div>
  )
}

export default ScoreBoard