import React from 'react';
import { ButtonTag,Typo14WhiteRubikMedium } from './ButtonStylings';

class Button extends React.Component {
    render() {
        const { buttonName,onClickLogin } = this.props;
        return <ButtonTag onSubmit={onClickLogin}>
        <Typo14WhiteRubikMedium>{buttonName}</Typo14WhiteRubikMedium>
        </ButtonTag>;
    }
}

export default Button;
