
import React, {Component} from 'react';
import './App.css';
import HeaderNav from './components/views/MainPage/HeaderNav'
import SubNav from './components/views/MainPage/SubNav';
import UnderNav from './components/views/MainPage/UnderNav';
import BrowsePage from './components/views/BrowsePage/BrowsePage';
import InPage from './components/views/InPage/InPage';


class App extends Component{
  render(){
    return(
      <body>
      <div className = "appbox">
      <InPage></InPage>
      <HeaderNav></HeaderNav>
      <SubNav></SubNav>
      <UnderNav></UnderNav>
      </div></body>
    );
  }
}



export default App;