import React, {Component} from 'react';
import './InPage.css';


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

  class InPage extends Component{
    render(){
      return(
        <body>
        <div className = "appbox">
        <ChartBar></ChartBar>
        <NewestBar></NewestBar>
        <ReviewBar></ReviewBar>
        <BuyingBar></BuyingBar>
        <ChattBar></ChattBar>
        <NoticeBar></NoticeBar>
        </div></body>
      );
    }
  }

  export default InPage;