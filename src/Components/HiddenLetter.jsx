import React,{Fragment,Component} from 'react';
import '../App.css';


class HiddenLetter extends Component {

    debug = () => {
        console.log("debug")
    }
checkIfEmptyChar = () => {

    if (this.props.hiddenCharacter === " "){
        return <span></span>
    }return this.props.hiddenCharacter
}

hideOrDisplayLetter = () => {

}

    render(){
        return(
        <div className="letter">{this.props.hiddenCharacter}
        
        {this.debug()}
        </div>
        )
    }

}




export default HiddenLetter