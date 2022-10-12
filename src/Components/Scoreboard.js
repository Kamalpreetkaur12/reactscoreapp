import React, {useContext} from 'react';
import {ScoreContext} from '../Contexts/ScoreContextProvider';
import InfoBoard from './InfoBoard';


function Scoreboard() {

    const {score, plusScore, minusScore} =  useContext(ScoreContext)


  return (
    <div className='scores'>
        <h2 className='heading'>Score Board</h2>
        <h3 className='secHead'>Your Current Score is {score}</h3>
        <div className='btn'>
          <button className='btnOne' onClick={plusScore}>+</button>
        <button className='btnTwo' onClick={minusScore}>-</button>
        </div>
        <InfoBoard/>
        
    </div>
  )
}

export default Scoreboard