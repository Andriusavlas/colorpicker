import React from 'react';
import sadface from '../assets/sad.png';

const Loser=(props)=>{
    return(
        <div className="loser">
            <div className="controls">
                <h1>You lose</h1>
                <img src={sadface} alt=""/>
                <div className="buttons">
                    <div onClick={()=>props.history.push('/quiz')} className="btn-again">Play again</div>
                    <div onClick={()=>props.history.push('/')} className="btn-home">Go to home page</div>
                </div>
            </div>
        </div>
    );
};

export default Loser;