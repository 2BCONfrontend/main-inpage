import React, {Component} from 'react';
import './App.css';
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

  
  
  export default HeaderNav;