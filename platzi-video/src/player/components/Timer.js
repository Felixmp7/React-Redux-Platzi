import React from 'react'
import './Timer.css'

const Timer = props => {
  return (
    <div className="Timer">
      <p>
        <span>00 / {props.duration}</span>
      </p>
    </div>
  )
}

export default Timer
