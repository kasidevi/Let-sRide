import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

import InputField from '../../../components/common/InputField/index'
import Button from '../../../components/common/Buttons/index'

import { getUserDisplayableErrorMessage } from '../../../utils/APIUtils'
import StringsData from '../../i18n/string.json'

import {
   Header,
   UserName,
   Password,
   Div,
   DivFlexColumn,
   MainDiv,
   Image,
   ErrorMessage,
   DontHaveAccount,
   AnchorTag
}
from './stylings'

@observer
class LoginPage extends React.Component {
   render() {
      const {
         onChangeUsername,
         onChangePassword,
         onClickLogin,
         errorMessageForPassword,
         errorMessageForUsername,
         isUserNameEmpty,
         isPassWordEmpty,
         username,
         password
      } = this.props

      return (
         <MainDiv>
            <Div>
               <Image
                  src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/d1119fe1-4f3a-40fd-860b-3adee7ca7915.svg'
                  alt='ibhubs Logo'
               />
               <Header>{StringsData.hiThereLogin}</Header>

               <DivFlexColumn>
                  <UserName>{StringsData.userName}</UserName>
                  <InputField
                     onChangeInputText={onChangeUsername}
                     type='text'
                     defaultValue={username}
                     isFeildEmpty={isUserNameEmpty}
                  />
                  {isUserNameEmpty ? (
                     <ErrorMessage>{errorMessageForUsername}</ErrorMessage>
                  ) : (
                     ''
                  )}
               </DivFlexColumn>

               <DivFlexColumn>
                  <Password>{StringsData.password}</Password>
                  <InputField
                     onChangeInputText={onChangePassword}
                     type='password'
                     defaultValue={password}
                     isFeildEmpty={isPassWordEmpty}
                  />
                  {isPassWordEmpty ? (
                     <ErrorMessage>{errorMessageForPassword}</ErrorMessage>
                  ) : (
                     ''
                  )}
               </DivFlexColumn>

               <Button
                  onSubmitButton={onClickLogin}
                  buttonName={StringsData.login}
               />
               <ErrorMessage>{getUserDisplayableErrorMessage(this.props.errorMeassageBackend)}</ErrorMessage>
               
               <DontHaveAccount>
                  {StringsData.dontHaveAnAccount}{' '}
                  <AnchorTag>{StringsData.signUp}</AnchorTag>
               </DontHaveAccount>
            </Div>
         </MainDiv>
      )
   }
}

export default LoginPage
