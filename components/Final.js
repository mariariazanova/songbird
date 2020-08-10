import React from 'react';
import PropTypes from 'prop-types';

import './Final.css';

class Final extends React.Component {

    static propTypes = {
        
    };
  
    render() {

      if (this.props.score == 30) {
  
        return (
            <div className="final">
                <h1>Поздравляем!</h1>
                <p>Вы прошли викторину и заняли 1-е место, набрав {this.props.score} из 30 возможных баллов.</p>
                <img className="firework" src="https://i.gifer.com/WJ41.gif" />

                 
            </div>
        )} else {    
            return (
            <div className="final">
                <h1>Поздравляем!</h1>
                <p>Вы прошли викторину и набрали {this.props.score} из 30 возможных баллов.</p>
                <hr className="hr" />
                <button className="btn-final">Попробовать еще раз!</button>   
                    
            </div>
        )}  
    }
      
}
      
export default Final;
      