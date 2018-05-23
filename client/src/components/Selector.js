import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from './Header';

const Selector=(props)=>{
    const colors=props.colors.map((color,i)=>{
        return <Link key={i} to={`/quiz/${color.name}`}>
            <div 
                className="option" 
                style={{backgroundColor:`rgb(${color.rgb[0]},${color.rgb[1]},${color.rgb[2]})`}}>
            </div>
        </Link>
    });
    return(
        <div className="selector">
            <Header/>
            <h1>Qu<span>i</span>z</h1>
            <div className="options">
                {colors}
            </div>
            <h2>CHOOSE YOUR COLOR TO START EYE TEST</h2>
        </div>
    );
};

const mapStateToProps=(state)=>{
    return{colors:state.colors};
};

export default connect(mapStateToProps)(Selector);