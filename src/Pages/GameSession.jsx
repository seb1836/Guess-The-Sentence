import React,{Fragment,Component} from 'react';
import '../App.css';
import HiddenLetter from '../Components/HiddenLetter'

const sentences = ["Javascript is cool","You guessed right","React is a framework from Facebook","This is made with React"]
const keyboard = ['q','w','e','r','t','y','u','i','o','p','','a','s','d','f','g','h','j','k','l','','z','x','c','v','b','n','m']
let count = 0;

class GameSession extends Component {
 state={
     keyClicked:"none"
 }   

 debugger = () => {
    console.log(this.props.history,this.props.location.state.randomIndex)
}

hiddenLetterRenderer = () => {
let randomSentence = this.props.location.state.randomIndex
let chars = sentences[randomSentence].split('')
 return chars.map((letter,index) =>{
        console.log(sentences[randomSentence].charAt(index),sentences[randomSentence],letter,chars)
        if (letter === this.state.keyClicked){
            return <HiddenLetter hiddenCharacter={letter}></HiddenLetter>
        }else if (letter === " "){
            return <span></span>
        }
        return <HiddenLetter hiddenCharacter={" "} ></HiddenLetter>


})

}

compareKeyWithSentence = (event) => {
console.log(event.target.innerHTML)
this.setState({keyClicked:event.target.innerHTML})
}

keyRenderer = () => {
    return keyboard.map((key,index) => {
        count ++
        if (key===''){
            return <br/>
        }
        return <span id={count} onClick={this.compareKeyWithSentence}>{key}</span>
    })
}
    render(){
        return(<Fragment>
            <h1>GameSession</h1>
            {this.debugger()}
            <div className="sentence">{this.hiddenLetterRenderer()}</div>
            <div className="keyRenderer">{this.keyRenderer()}</div>
            </Fragment>
        )
        
    }
}

export default GameSession