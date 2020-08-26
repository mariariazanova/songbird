import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';
import img from '../images/logo.svg';



class Header extends React.Component {

    static propTypes = {
        
    };
  
    render() {
    
      const typeBirdsList = this.props.typeBirds.map((item, index) => (
          <li key={index} className={
                        (index === this.props.clrBtn)
                        ? "page-item active"
                        : "page-item"
                        }
          >
            <a href="/#" className="page-link">{item}</a>
          </li>

              
      ));
     
  
      return (
        //<React.Fragment> 
        <div className="header">  
          <div className="top-panel">
            <div className="logo">
              <img src={img} className="logo" />
            </div> 
            <h5>Score:<span className="score">{this.props.score}</span>
            </h5> 
          </div>
          <ul className="pagination">
             {typeBirdsList}           
          </ul>
          </div>
        //</React.Fragment>             
              
      )  
    }
  
  }
  
  export default Header;
  