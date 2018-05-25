import React from 'react';
import { connect } from 'react-redux';

class Maroon extends React.Component{
    state={
        level:1,
        squares:[],
        rgb:[128,0,0],
        showPopup:false
    };
    popupHandler=()=>{
        this.setState({showPopup:!this.state.showPopup});
    };
    componentDidMount(){
        this.renderSquares();
    };
    clickHandler=(i)=>{
        const newSquares=this.state.squares;
        newSquares[i][1]=!this.state.squares[i][1];
        this.setState({squares:newSquares});
    };
    nextLevelHandler=()=>{
        const normal=`rgb(${this.state.rgb[0]},${this.state.rgb[1]},${this.state.rgb[2]})`;
        const score=this.state.squares.reduce((total, item)=>{
            if(item[0]!==normal && item[1]===true){
                total+=1;
            };
            return total;
        },0);
        const clicks=this.state.squares.reduce((clicks, item)=>{
            if(item[1]===true){
                clicks+=1;
            };
            return clicks;
        },0);
        if(score===5 && clicks===5){
            this.setState({level:this.state.level+1});
            this.renderSquares();
        }else{
            this.props.scoreHandler('maroon',this.state.level);
            this.props.history.push('/loser');
        };
    };
    shuffleArray=(array)=>{
        var ctr=array.length,temp,index;
        // While the array is not empty
        while (ctr>0){
            // Pick a random index
                index=Math.floor(Math.random()*ctr);
            // Decrease ctr by 1
                ctr--;
            // And swap the last element with it
                temp=array[ctr];
                array[ctr]=array[index];
                array[index]=temp;
            }
        return array;
    };
    renderSquares=()=>{
        const color=this.state.rgb;
        // creates 60 falses in the local state
        const colors=[];
        const normal=`rgb(${color[0]},${color[1]},${color[2]})`;
        const different=`rgb(${color[0]-100/this.state.level},${color[1]},${color[2]})`;
        for(let x=0;x<55;x++){
            const variable=[normal,false];
            colors.push(variable);
        };
        for(let x=0;x<5;x++){
            const variable=[different,false];
            colors.push(variable);
        };
        this.shuffleArray(colors);
        this.setState({squares:colors});
    };
    render(){
        const rgb=`rgb(${this.state.rgb[0]},${this.state.rgb[1]},${this.state.rgb[2]})`;
        const squares=this.state.squares.map((square,i)=>{
            return <div 
                onClick={()=>{this.clickHandler(i)}}
                key={i} 
                className={square[1]===true? "square clicked" : "square"} 
                style={{backgroundColor:square[0]}}>
            </div>
        });
        return(
            <div className="level">
                <div    
                    style={this.state.showPopup===true? {display:'block'} : {display:"none"}} 
                    className="background">
                </div>
                <div style={this.state.showPopup===true? {top:'50%'} : {top:"-50%"}} className="popup">
                    <h2>Are you sure you want to quit?</h2>
                    <div onClick={this.popupHandler} className="btn-no">No</div>
                    <div onClick={()=>this.props.history.push('/')} className="btn-yes">Yes</div>
                </div>
                <h1>LEVEL <span style={{color:rgb}}>{this.state.level}</span></h1>
                <div className="squares">
                    {squares}
                </div>
                <div className="btn-next"
                    onClick={this.nextLevelHandler} 
                    style={{border:`1px solid ${rgb}`}}>
                    Next
                </div>
                <div
                    onClick={this.popupHandler}
                    className="btn-quit" 
                    style={{border:`1px solid ${rgb}`}}>
                    Quit
                </div>
            </div>
        );
    };
};

const mapDispatchToProps=(dispatch)=>{
    return{
        scoreHandler(color, level){
            dispatch({type:"SCORE_HANDLER",payload:[color,level]})
        }
    };
};

export default connect(null,mapDispatchToProps)(Maroon);