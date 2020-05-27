import React from 'react';
import { Div, InputTag } from './InputFieldStylings'

class InputField extends React.Component {

    render() {
        const { type, placeholder, value, onChangeInputText } = this.props;
        return <Div>
        <InputTag onChange={onChangeInputText} type={type} value={value} placeholder={placeholder} />
        </Div>;
    }
}

export default InputField;
