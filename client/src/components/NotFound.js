import React from 'react';
import error from '../assets/404.png';

const NotFound=(props)=>{
    return(
        <div className="error">
            <img src={error} alt=""/>
            <div onClick={()=>props.history.push('/')} className="btn-back">Take me back to civilization</div>
        </div>
    );
};

export default NotFound;