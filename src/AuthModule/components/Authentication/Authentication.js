import React from 'react';
//import observer from 'mobx-react';
//import StrigsData from '../../i18n/string.json'
//import InputField from '../../../components/common/InputField/index'
import LoginPage from '../LoginPage/index';
import { Div } from './AuthStylings';
//@observer
class Authentication extends React.Component {

    render() {
        return (<Div>
        <LoginPage/>
        </Div>);
    }

}

export default Authentication;
