import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

class HomePage extends React.Component {
   render() {
      return (
         <div className='App'>
         <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <p>
               Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
               className='App-link'
               href='https://reactjs.org'
               target='_blank'
               rel='noopener noreferrer'
            >
               Learn React
            </a>
            <Link to='/page-1'>Page 1</Link>
            <Link to='/LoginPage'>Let's Ride</Link>
            <Link to='/counter'> counter page </Link>
            <Link to='/home-screen'>Home Screen</Link>
            <Link to='/ride-from'>Ride Request</Link>
            <Link to='/share-ride'>Share Ride</Link>
            <Link to='/asset-transport-request'>Asset Transport Request</Link>
            <Link to='/share-travel-info'>Share Travel Info</Link>
            
         </header>
      </div>
      );
   }
}
export default HomePage;
