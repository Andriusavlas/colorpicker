import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';

const Statistics=(props)=>{
    const progress=props.progress.map((item, i)=>{
        const height=30+10*item.result;
        return <div
            key={i}
            style={{backgroundColor:item.color,height:`${height}px`}} 
            className="bar">
            <p style={{lineHeight:`${height}px`}}>{item.result===''? 'No result' : `Level ${item.result}`}</p>
        </div>
    });
    return(
        <div className="statistics">
            <Header/>
            <h1>STAT<span className="red-title">I</span>ST<span className="red-title">I</span>CS</h1>
            <div className="bars">
                {progress}
            </div>
            <h2><span className="red">Log in</span> or <span className="blue">create</span> your account to track your progress</h2>
        </div>
    );
};

const mapStateToProps=(state)=>{
    return {
        progress:state.progress
    };
};

export default connect(mapStateToProps)(Statistics);