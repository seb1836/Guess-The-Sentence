import React, { Fragment, Component } from 'react'
import '../App.css'

class HiddenLetter extends Component {
  debug = () => {
    console.log('debug')
  }
  checkIfEmptyChar = () => {
    if (this.props.hiddenCharacter === ' ') {
      return <span className="letterSpace"></span>
    }
    return this.props.hiddenCharacter
  }

//   callSetChars = () => {
//     if (typeof this.props.hiddenCharacter === 'string' && this.props.hiddenCharacter !== ' ') {
//       this.props.setChars()
//     }
//   }

  render() {
    return (
      <div className='letter'>
        {this.props.hiddenCharacter}
        
        {this.debug()}
      </div>
    )
  }
}

export default HiddenLetter
