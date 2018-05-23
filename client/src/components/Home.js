import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from './Header';

const Home=(props)=>{
    const colors=props.match.params.color? (
        props.colors.map((item, i)=>{
            return <Link className={item.name===props.match.params.color? "active": null} key={i} to={`/colors/${item.name}`}>
                <div className="pallet-color" style={{backgroundColor:item.name}}><p>{item.description}</p></div>
            </Link>;
        })
    ) : (
        props.colors.map((item, i)=>{
            return <Link key={i} to={`/colors/${item.name}`}>
                <div className="pallet-color" style={{backgroundColor:item.name}}></div>
            </Link>;
        })
    );
    return(
        <div className="home">
            <Header/>
            <h1>Color Picker</h1>
            <div className="pallet">
                {colors}
            </div>
        </div>
    );
};

const mapStateToProps=(state)=>{
    return{colors:state.colors};
};

export default connect(mapStateToProps)(Home);