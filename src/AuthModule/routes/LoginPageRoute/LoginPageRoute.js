import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import LoginPage from '../../components/LoginPage/index';
import {withRouter} from 'react-router';

@observer
class LoginPageRoute extends React.Component {
   @observable username
   @observable password
   @observable errorMessage
   constructor(props) {
      super(props)
      this.username = ''
      this.password = ''
      this.errorMessage = ''
   }

   onChangeUsername = event => {
      if (event.target.value.trim !== '') {
         this.username = event.target.value
      }
   }

   onChangePassword = event => {
      if (event.target.value.trim !== '') {
         this.password = event.target.value
      }
   }

   onClickLogin = event => {
      if (this.username === '') {
         this.errorMessage = 'Please enter username'
      }
      else if (this.password === '') {
         this.errorMessage = 'Please enter password'
      }
      else {
         //this.props.authStore.userSignIn();
         let { history } = this.props;
         history.push('/ride-form');
      }
   }

   render() {
      return (
         <LoginPage
            onChangeUsername={this.onChangeUsername}
            onChangePassword={this.onChangePassword}
            onClickLogin={this.onClickLogin}
            errorMessage={this.errorMessage}
            username={this.username}
            password={this.password}
            // getUserSignInAPIError={this.props.authStore.getUserSignInAPIError}
            // getUserSignInAPIStatus ={this.props.authStore.getUserSignInAPIStatus}
         />
      );
   }
}

export default withRouter(LoginPageRoute);
