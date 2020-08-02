import React from 'react';
import PropTypes from 'prop-types';
import Description from './Description';

import './Answers.css';

class Answers extends React.Component {

    static propTypes = {
        
    };
  
    
    render() {
    
        const answersList = this.props.variableBirds[this.props.clrBtn].map((item, index) => (
            <li key={index} className="answers-list-item">
              <span className="li-btn"></span>
              <a href="/#" className="">{item}</a>
            </li>
  
                
        ));
     
  
      return (
        //<React.Fragment> 
        <div className="answers-block"> 
          <div className="anwers-block-variants">
            <ul className="answers-list">
              {answersList}
            </ul> 
          </div>
          <Description />
          <button className="next-btn">Next level</button>
        </div>
        //</React.Fragment>             
              
      )  
    }
  
  }
  
export default Answers;