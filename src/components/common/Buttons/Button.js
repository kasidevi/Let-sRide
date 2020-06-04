import React from 'react'
import { ButtonTag } from './ButtonStylings'

class Button extends React.Component {
   render() {
      const { buttonName, onSubmitButton } = this.props
      return <ButtonTag onClick={onSubmitButton}>{buttonName}</ButtonTag>
   }
}

export default Button
