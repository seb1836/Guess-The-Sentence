import React,{Fragment} from 'react';
import {Link} from "react-router-dom"
import '../App.css';


const GameResult = (props) => {
const GameResultRenderer = () =>{
    if( props.location.state.result === "win"){
        return "you Win!"
    }return "you loose!"
}
return(
    <Fragment>
<h1>{GameResultRenderer()}</h1>
<Link to={{
    pathname:"/GameSession",
    state:{randomIndex:Math.floor(
        Math.random() * Math.floor(4))}
}}>
<button>Try again?</button>
</Link>
</Fragment>
)
}


export default GameResult