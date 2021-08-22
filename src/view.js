import React, { Component } from 'react';
import './view.css';

import './App.css';
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";



class HeaderNav extends Component {
  render(){
    return (
      <nav>
        <ul class="header-nav">
          <li class="header-item"> <a href=""></a> </li>
          <img class="header-logo" src= "logoimg.png"></img>
          <li class="header-login"> <a href=""> <FaUserAlt></FaUserAlt> USER_ID </a> </li>
        </ul>
      </nav>
    );
  }
}

class SubNav extends Component {
  render(){
    return (
      <nav>
        <ul class="main-nav">
          <li class="main-item"> <a href="">리뷰</a> </li>
          <li class="main-item"> <a href="">공구</a> </li>
          <li class="main-item"> <a href="">자유</a> </li>
          <li class="main-item"> <a href=""> <FaRegCalendarAlt></FaRegCalendarAlt> </a></li>
        </ul>
      </nav>
    );
  }
}

class UnderNav extends Component {
  render(){
    return (
      <div id="footer"></div>
    );
  }
}

class App extends Component{
    render(){
      return(
        <body>
        <div className = "appbox">
        <HeaderNav></HeaderNav>
        <SubNav></SubNav>
        <UnderNav></UnderNav>
        </div></body>
      );
    }
  }
  
  
  export default App;
