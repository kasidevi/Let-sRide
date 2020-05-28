import React from 'react'
import { Div, InputTag } from './InputFieldStylings'

class InputField extends React.Component {
   render() {
      const { type, value, onChangeInputText } = this.props
      console.log('input feild');
      return (
         <Div>
            <InputTag
               onChange={onChangeInputText}
               type={type}
               value={value}
            />
         </Div>
      )
   }
}

export default InputField
