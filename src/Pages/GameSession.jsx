import React,{Fragment,Component} from 'react';
import '../App.css';


const sentences = ["Javascript is cool","You guessed right","React is a framework from Facebook","This is made with React"]

class GameSession extends Component {

 debugger = () => {
    console.log(this.props.history)
}

    render(){
        return(<Fragment>
            <h1>GameSession</h1>
            {this.debugger()}
            </Fragment>
        )
        
    }
}

export default GameSession