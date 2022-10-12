import React, {useContext} from 'react';
import {ScoreContext} from '../Contexts/ScoreContextProvider';

function InfoBoard() {
    const {score, plusScore, minusScore} =  useContext(ScoreContext);
     console.log(score);
  return (
    <div>
    {score > 100? <h3 className='lastLine'>Good job!</h3> : <h3 className='lastLine'>Let's make it over 100!</h3>}
    </div>
  )
}

export default InfoBoard