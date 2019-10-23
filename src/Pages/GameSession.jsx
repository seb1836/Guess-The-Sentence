import React,{Fragment,Component} from 'react';
import '../App.css';
import HiddenLetter from '../Components/HiddenLetter';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import {Redirect} from 'react-router-dom'

const sentences = ["Javascript is cool","You guessed right","React is a framework from Facebook","This is made with React"]
const keyboard = ['q','w','e','r','t','y','u','i','o','p','','a','s','d','f','g','h','j','k','l','','z','x','c','v','b','n','m']
let arrayResult = []
let isArrayResultInitialise= false
class GameSession extends Component {
 state={
     keyClicked:"none" ,chars:sentences[this.props.location.state.randomIndex].split(''),tryRemaining:4, gameResult:"",navigateToGameResult:false
 }   

arrayResultCreator = () =>{
    
for(let i = 0; i< this.state.chars.length;i++){
    if(this.state.chars[i]=== " "){
        arrayResult[i]="space"
    }else if (this.state.chars[i]!== " ")
    arrayResult[i]=" "
}

}
 debugger = () => {
    console.log(this.props.history,this.props.location.state.randomIndex,)
}

// charCreator = () => {
//     if(this.state.keyClicked==="none"){
//         let randomSentence = this.props.location.state.randomIndex
//         let chars = sentences[randomSentence].split('')
//         this.hiddenLetterRenderer(chars)
//     }else if (this.state.keyClicked !=="none"){
//     this.hiddenLetterRenderer()}
// }

updateChars = () => {
    this.setState({chars:arrayResult})
}

hiddenLetterRenderer = () => {
   
    if(!isArrayResultInitialise){
        this.arrayResultCreator()
        console.log(arrayResult)
        isArrayResultInitialise=true
    return this.state.chars.map((letter,index) =>{
     console.log(this.state.chars,"state char after")
        //console.log(sentences[randomSentence].charAt(index),sentences[randomSentence],letter,chars)
        if (letter.toLowerCase() === this.state.keyClicked){
           
            
            return <HiddenLetter hiddenCharacter={letter} setChars={this.updateChars}></HiddenLetter>
        }else if (letter === " "){
            return <span></span>
        }
        return <HiddenLetter hiddenCharacter={" "} ></HiddenLetter>


})

}return arrayResult.map((letter,index) =>{
    
       //console.log(sentences[randomSentence].charAt(index),sentences[randomSentence],letter,chars)
       if (letter.toLowerCase() === this.state.keyClicked || letter !== "space"){
          
           
           return <HiddenLetter hiddenCharacter={letter} setChars={this.updateChars}></HiddenLetter>
       }else if (letter ==="space"){
           letter = ""
           return <span></span>
       }
       return <HiddenLetter hiddenCharacter={" "} ></HiddenLetter>


})
}

compareKeyPressedWithSentence = (keyPressed) => {
   let isOneCorrectKeyIsClicked = false
    // this.state.chars.forEach((letter,index) =>{
        for( let i =0;i<this.state.chars.length;i++){
            console.log(keyPressed,this.state.chars[i],'----')
    if(keyPressed===this.state.chars[i].toLowerCase()){
    
        arrayResult[i]=this.state.chars[i]
        console.log(arrayResult)
        console.log("pos i",i,this.state.chars.length)
      isOneCorrectKeyIsClicked = true  
}if(i === this.state.chars.length-1 && !isOneCorrectKeyIsClicked){
    console.log("gggggg")
return false
}
    } 
}


checkGameStatus = () => {
    if (this.state.tryRemaining === 0){
        console.log("pass into 0")
        isArrayResultInitialise= false
        return <Redirect to ={{pathname:'/GameResult',state:{result:"loose"}}}/>
}else if (!arrayResult.includes(" ")){
    setTimeout(() => {
        this.setState({navigateToGameResult:true})
    }, 5000);
    
}
}
keyEvent = (event) => {
console.log(event.target.innerHTML,this.state.tryRemaining)
this.setState({keyClicked:event.target.innerHTML})
// this.state.chars.forEach((letter,index) =>{
//     console.log(event.target.innerHTML,letter,'---------')
// if(event.target.innerHTML===letter.toLowerCase()){
    
//     arrayResult[index]=letter
//     console.log(arrayResult)
 if (this.compareKeyPressedWithSentence(event.target.innerHTML)===false){
console.log(this.state.tryRemaining,'pass')
this.setState((state) => { return{tryRemaining:state.tryRemaining-1}})
}
console.log("pass after if")
}
keyRenderer = () => {
    return keyboard.map((key,index) => {
        
        if (key===''){
            return <br/>
        }
        return <span  onClick={this.keyEvent}>{key}</span>
    })
}

hearthRenderer = () => {
    let hearth = new Array(this.state.tryRemaining)
    
        hearth.fill(<i class="fa fa-heart fa-2x"></i>)
    
    return hearth
}
    render(){
        if (this.state.navigateToGameResult === true){
            isArrayResultInitialise =false
            return <Redirect to ={{pathname:'/GameResult',state:{result:"win"}}}/>
        }
        return(<div className="gameSession">
            <h1>GameSession</h1>
            
            <div className="sentence">{this.hiddenLetterRenderer()}</div>
            {this.checkGameStatus()}
            <div className="keyRenderer">{this.keyRenderer()}</div>
            {this.hearthRenderer()}
            </div>
        )
        
    }
}

export default GameSession