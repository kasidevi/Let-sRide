import React from 'react';
import { Div, InputTag } from './stylings';

class InputField extends React.Component {
   render() {
      const { type, defaultValue, onChangeInputText } = this.props;
      return (
         <Div>
            <InputTag
               onChange={onChangeInputText}
               type={type}
               value={defaultValue}
            />
         </Div>
      );
   }
}

export default InputField;
