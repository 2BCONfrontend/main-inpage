
import React, {Component} from 'react';
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



class ChartBar extends Component{
  render(){
    return(
       <div className = "chart-bar"><div className = "chart-name">인기순위</div></div>
    );
  }
}



class NewestBar extends Component {
  render(){
    return(
  
      <div className = "new-bar"><p className = "new-name" >최신 게시물</p></div>
    );
  }
}

class ReviewBar extends Component {
  render(){
    return(
      <div className = "rev-bar"><p className = "rev-name" >REVIEW</p></div>
    );
  }
}

class BuyingBar extends Component {
  render(){
    return(
      <div className = "buy-bar"><p className = "buy-name" >공동 구매</p></div>
    );
  }
}

class ChattBar extends Component {
  render(){
    return(
      <div className = "chatt-bar"><p className = "chatt-name" >자유 게시판</p></div>
    );
  }
}

class NoticeBar extends Component {
  render(){
    return(
      <div className = "notice-bar"><p className = "notice-name">NOTICE</p></div>
    );
  }
}

class App extends Component{
  render(){
    return(
      <body>
      <div className = "appbox">
      <ChartBar></ChartBar>
      <NewestBar></NewestBar>
      <ReviewBar></ReviewBar>
      <BuyingBar></BuyingBar>
      <ChattBar></ChattBar>
      <HeaderNav></HeaderNav>
      <SubNav></SubNav>
      <UnderNav></UnderNav>
      <NoticeBar></NoticeBar>
      </div></body>
    );
  }
}


export default App;