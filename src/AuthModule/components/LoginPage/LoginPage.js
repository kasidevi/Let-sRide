import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import InputField from '../../../components/common/InputField/index';
import Button from '../../../components/common/Buttons/index';

import StringsData from '../../i18n/string.json';

import {
   Header,
   UserName,
   Password,
   Div,
   MainDiv,
   Image,
   ErrorMessage
}
from './stylings';

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
      const {
         onChangeUsername,
         onChangePassword,
         onClickLogin,
         errorMessage,
         username,
         password
      } = this.props;
      return (
         <MainDiv>
         <Div>
            <Image
               src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/d1119fe1-4f3a-40fd-860b-3adee7ca7915.svg'
               alt='ibhubs Logo'
            />
            <Header>
               {StringsData.hiThereLogin}
            </Header>
            <UserName>
               {StringsData.userName}
            </UserName>
            
            <InputField
               onChangeInputText={onChangeUsername}
               type='text'
               defaultValue={username}
            />
            <Password>
               {StringsData.password}
            </Password>
            <InputField
               onChangeInputText={onChangePassword}
               type='password'
               defaultValue={password}
            />
            
            <Button onClickLogin={onClickLogin} buttonName={StringsData.login} />
            <ErrorMessage>{errorMessage}</ErrorMessage>
           
         </Div>
         </MainDiv>
      );
   }
}

export default LoginPage;
