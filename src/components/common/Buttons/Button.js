import React from 'react';
import { ButtonTag } from './ButtonStylings';

class Button extends React.Component {
   render() {
      const { buttonName, onClickLogin } = this.props;
      return (
         <ButtonTag onClick={onClickLogin}>
            {buttonName}
         </ButtonTag>
      );
   }
}

export default Button;
