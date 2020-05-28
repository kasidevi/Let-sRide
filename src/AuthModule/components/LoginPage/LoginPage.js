import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

import InputField from '../../../components/common/InputField/index'
import Button from '../../../components/common/Buttons/index'
import LoadingWrapperWithFailure from '../../../components/common/LoadingWrapperWithFailure/index'

import StrigsData from '../../i18n/string.json'

import {
   Header,
   UserName,
   Password,
   Div,
   Image
}
from './stylings'

@observer
class LoginPage extends React.Component {
   @observable username
   @observable password
   @observable errorMessage

   constructor(props) {
      super(props)
      this.username = ''
      this.password = ''
      this.errorMessage = ''
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
         <Div>
            <Image
               src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/d1119fe1-4f3a-40fd-860b-3adee7ca7915.svg'
               alt='ibhubs Logo'
            />
            <Header>
               {StrigsData.HiThereLogin}
            </Header>
            <UserName>
               {StrigsData.UserName}
            </UserName>
            <InputField
               onChangeInputText={onChangeUsername}
               type='text'
               defaultValue={username}
            />
            <Password>
               {StrigsData.Password}
            </Password>
            <InputField
               onChangeInputText={onChangePassword}
               type='password'
               defaultValue={password}
            />
            <Button onClickLogin={onClickLogin} buttonName={StrigsData.Login} />
         </Div>
      );
   }
}

export default LoginPage;
