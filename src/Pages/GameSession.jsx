import React,{Fragment,Component} from 'react';
import '../App.css';
import HiddenLetter from '../Components/HiddenLetter'

const sentences = ["Javascript is cool","You guessed right","React is a framework from Facebook","This is made with React"]

class GameSession extends Component {

 debugger = () => {
    console.log(this.props.history,this.props.location.state.randomIndex)
}

hiddenLetterRenderer = () => {
let randomSentence = this.props.location.state.randomIndex
sentences[randomSentence].map((letter,index) =>{
return <HiddenLetter hiddenCharacter={letter}></HiddenLetter>
})

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