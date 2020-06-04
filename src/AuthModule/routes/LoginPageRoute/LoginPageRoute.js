import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import LoginPage from '../../components/LoginPage/index';
import { withRouter } from 'react-router';

@inject('authStore')
@observer
class LoginPageRoute extends React.Component {
   @observable username
   @observable password
   @observable errorMessageForUsername
   @observable errorMessageForPassword
   @observable isUserNameEmpty
   @observable isPassWordEmpty
   constructor(props) {
      super(props);
      this.username = '';
      this.password = '';
      this.errorMessageForUsername = '';
      this.errorMessageForPassword = '';
      this.isUserNameEmpty = false;
      this.isPassWordEmpty = false;
   }

   onChangeUsername = event => {
      if (event.target.value.trim !== '') {
         this.username = event.target.value;
         this.isUserNameEmpty = false;
      }
      else {
         this.isUserNameEmpty = true;
      }
   }


   onChangePassword = event => {
      if (event.target.value.trim !== '') {
         this.password = event.target.value;
         this.isPassWordEmpty = false;
      }
      else {
         this.isPassWordEmpty = true;
      }
   }


   onClickLogin = event => {

      if (this.username === '') {
         this.errorMessageForUsername = 'Please enter username';
         this.isUserNameEmpty = true;
      }

      if (this.password === '') {
         this.errorMessageForPassword = 'Please enter password';
         this.isPassWordEmpty = true;
      }

      else if (this.username !== '' && this.password !== '') {
         this.props.authStore.userLogIn();
         const { history } = this.props;
         history.push('/home-screen');
      }

   }

   render() {
      return (
         <LoginPage
            onChangeUsername={this.onChangeUsername}
            onChangePassword={this.onChangePassword}
            onClickLogin={this.onClickLogin}
            errorMessageForUsername={this.errorMessageForUsername}
            errorMessageForPassword={this.errorMessageForPassword}
            username={this.username}
            password={this.password}
            isUserNameEmpty={this.isUserNameEmpty}
            isPassWordEmpty={this.isPassWordEmpty}
         />
      );
   }
}

export default withRouter(LoginPageRoute);
