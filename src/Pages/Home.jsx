import React,{Fragment} from 'react';
import {withRouter} from "react-router-dom"
import '../App.css';


const Home = (props) =>{

const initiateGame = () => {
    props.location.state={random:1}
    console.log("before",props.history)
props.history.push("/GameSession")

}
    return(
<Fragment>
<p className="welcome-title">Guess the sentence</p>
<button onClick={initiateGame}>start</button>

</Fragment>


    )
}

export default withRouter(Home)

