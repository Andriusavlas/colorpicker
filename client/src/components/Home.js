import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from './Header';

const Home=(props)=>{
    const colors=props.match.params.color? (
        props.colors.map((item, i)=>{
            return <Link className={item.name===props.match.params.color? "active": null} key={i} to={`/colors/${item.name}`}>
                <div className={i===0 || i===props.colors.length-1? (i===0? "pallet-color first" : "pallet-color last"): "pallet-color"} style={{backgroundColor:`rgb(${item.rgb[0]},${item.rgb[1]},${item.rgb[2]})`}}><p>{item.description}</p></div>
            </Link>;
        })
    ) : (
        props.colors.map((item, i)=>{
            return <Link key={i} to={`/colors/${item.name}`}>
                <div className={i===0 || i===props.colors.length-1? (i===0? "pallet-color first" : "pallet-color last"): "pallet-color"} style={{backgroundColor:`rgb(${item.rgb[0]},${item.rgb[1]},${item.rgb[2]})`}}></div>
            </Link>;
        })
    );
    const letters=["C","O","L","O","R"," ","P","I","C","K","E","R"];
    const title=letters.map((letter, i)=>{
        const hue='rgb('+(Math.floor(Math.random()*256))+','+(Math.floor(Math.random()*256))+','+(Math.floor(Math.random()*256))+')';
        return <span key={i} style={{color:hue}}>{letter}</span>;
    });
    return(
        <div className="home">
            <Header/>
            <h1>{title}</h1>
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