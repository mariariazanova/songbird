import React from 'react';
import PropTypes from 'prop-types';

import './Description.css';

class Description extends React.Component {

    static propTypes = {
        
    };
  
    
    render() {
    
        
     
  
      return (
       
        <div className="description-block"> 
          <div className="description-block-card">
              <p className="task-instruction">
                <span>Послушайте плеер.</span>
                <span>Выберите птицу из списка.</span>
              </p>
              <div></div>
              <span></span>            
          </div>
        </div>
                   
              
      )  
    }
  
  }
  
export default Description;