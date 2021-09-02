
import React, {Component} from 'react';

class HeaderBar_1 extends Component{
    render(){
      return(
         <div className = "header-bar-1"></div>
      );
    }
  }
  class HeaderTitle extends Component {
    render(){
      return(
        <p className = "header-title">집에서 심심한 사람들 혼자놀기 사이트 추천함 </p>
      );
    }
  }
  
  
  class HeaderBar_2 extends Component{
    render(){
      return(
         <div className = "header-bar-2"></div>
      );
    }
  }
  
  class HeaderBar_3 extends Component{
    render(){
      return(
         <div className = "header-bar-3"></div>
      );
    }
  }
  
  class HeaderBar_4 extends Component{
    render(){
      return(
         <div className = "header-bar-4"></div>
      );
    }
  }
  
  class ReplyBox extends Component {
    render(){
      return(
      <form><input type="text" className= "reply-box" autoFocus></input></form>
      );
    }
  }
  
  class ReplyButton extends Component {
    render(){
      return(
      <button className="reply-button">등록</button>
      );
    }
  }
  
  
  class ListButton extends Component {
    render(){
      return(
      <button className="list-button">목록</button>
      );
    }
  }
  
  class ReplyNumber extends Component {
    render(){
      return(
      <div className= "reply-number">댓글(0개)</div>
      );
    }
  }
  
  class BrowsePage extends Component{
    render(){
      return(
        <body>
        <div className = "Browsebox">
        <HeaderBar_1></HeaderBar_1>
        <HeaderBar_2></HeaderBar_2>
        <HeaderBar_3></HeaderBar_3>
        <HeaderBar_4></HeaderBar_4>
        <HeaderTitle></HeaderTitle>
        <ReplyBox></ReplyBox>
        <ReplyButton></ReplyButton>
        <ListButton></ListButton>
        <ReplyNumber></ReplyNumber>
        </div></body>
      );
    }
  }
  
  export default BrowsePage;