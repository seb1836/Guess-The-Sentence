import React,{Fragment} from 'react';
import {Link} from "react-router-dom"
import '../App.css';


const Home = (props) =>{


    return(
<Fragment>
<p className="welcome-title">Guess the sentence</p>
<Link to={{
    pathname:"/GameSession",
    state:{randomIndex:Math.floor(
        Math.random() * Math.floor(4))}
}}>
<button>start</button>
</Link>
</Fragment>


    )
}

export default Home

