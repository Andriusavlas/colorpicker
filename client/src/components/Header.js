import React from 'react';
import { NavLink } from 'react-router-dom';

const Header=(props)=>{
    return(
        <header>
            <NavLink activeClassName="active" className="home"  exact to="/">Home</NavLink>
            <NavLink activeClassName="active" className="quiz" to="/quiz">Quiz</NavLink>
            <NavLink activeClassName="active" className="login" exact to="/login">Log-in</NavLink>
            <NavLink activeClassName="active" className="statistics" exact to="/statistics">Statistics</NavLink>
        </header>
    );
};

export default Header;