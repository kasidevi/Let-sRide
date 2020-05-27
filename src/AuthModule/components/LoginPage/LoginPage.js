import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import InputField from '../../../components/common/InputField/index';
import Button from '../../../components/common/Buttons/index';
import LoadingWrapperWithFailure from '../../../components/common/LoadingWrapperWithFailure/index';

import StrigsData from '../../i18n/string.json';

import { Typo32RubikRegular, Typo14DarkBlueGreyHKGroteskRegular, Typo12HKGroteskSemiBoldSteel, Div, Image } from './LoginPageStylings';

@observer
class LoginPage extends React.Component {
    @observable username
    @observable password
    @observable errorMessage

    constructor(props) {
        super(props);
        this.username = '';
        this.password = '';
        this.errorMessage = '';
    }

    render() {
        const { onChangeUsername, onChangePassword, onClickLogin, errorMessage } = this.props;
        return (<Div>
        
        <Image src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/d1119fe1-4f3a-40fd-860b-3adee7ca7915.svg" alt="ibhubs Logo"/>
        <Typo32RubikRegular>{StrigsData.HiTherePleaseSignUp}</Typo32RubikRegular>
        <Typo12HKGroteskSemiBoldSteel>{StrigsData.UserName}</Typo12HKGroteskSemiBoldSteel>
        <InputField onChangeInputText={onChangeUsername} type="text" defaultValue='va' placeholder={StrigsData.DeathStarConstrction} />
        <Typo12HKGroteskSemiBoldSteel>{StrigsData.Password}</Typo12HKGroteskSemiBoldSteel>
        <InputField onChangeInputText={onChangePassword} type="password" defaultValue="value"/>
        <Button onClickLogin={onClickLogin} buttonName={StrigsData.Login} />
        
    </Div>);

    }

}

export default LoginPage;
