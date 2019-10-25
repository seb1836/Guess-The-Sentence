import React,{Fragment} from 'react';
import {Link} from "react-router-dom"
import '../App.css';


const Home = (props) =>{


    return(
<Fragment>
<h1 className="welcome-title">Guess the sentence</h1>
<Link to={{
    pathname:"/GameSession",
    state:{randomIndex:Math.floor(
        Math.random() * Math.floor(4))}
}}>
<button>start Game</button>
</Link>
</Fragment>


    )
}

export default Home

