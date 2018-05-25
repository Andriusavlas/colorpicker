const initialState=[
    {color:'red',result:''},
    {color:'orange',result:''},
    {color:'maroon',result:''},
    {color:'yellow',result:''},
    {color:'green',result:''},
    {color:'blue',result:''},
    {color:'purple',result:''},
];

const reducer=(state=initialState,action)=>{
    if(action.type==="SCORE_HANDLER"){
        return state.map((stat,i)=>{
            if(action.payload[0]===stat.color && stat.result===''){
                return {...stat, result:action.payload[1]};
            }else if(action.payload[0]===stat.color && stat.result<action.payload[1]){
                return {...stat, result:action.payload[1]};
            }else{
                return stat;
            }
        })
    }else{
        return state;
    }
};

export default reducer;