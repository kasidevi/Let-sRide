import React from 'react';
import { Div, InputTag } from './stylings';

class InputField extends React.Component {


   render() {
      const { type, defaultValue, onChangeInputText, placeholder, isFeildEmpty } = this.props;

      return (
         <Div>
            <InputTag
               onChange={onChangeInputText}
               type={type}
               value={defaultValue}
               placeholder={placeholder}
               isFeildEmpty={isFeildEmpty}
            />
         </Div>
      );
   }
}

export default InputField;
