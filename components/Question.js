import React from 'react';
import PropTypes from 'prop-types';

import './Question.css';
import img from '../images/bird.jpg';

var svg_playback =[];

class Question extends React.Component {

    static propTypes = {
        
    };
  
    
    render() {
    
      
     
  
      return (
        //<React.Fragment> 
        <div className="question-panel">
              <img src={img} className="bird-image" />
          <div className="">
            <ul className="question-panel-aside">
                <li className="question-panel-item">
                    <h3>******</h3>
                </li>
                <li className="question-panel-item">
                    <div className="audio-player">
                        <audio src={this.props.sound[this.props.clrBtn][this.props.rand]}></audio>
                        <div className="controls">
                            <div className="playback-button">
                                <svg className="" viewBox="-200 0 1200 1000">
                                    <path fill="#00bc8c" d="M96.51 11.97c-31.23 8.05-53.26 32.76-63.42 71.27-3.45 12.84-3.64 29.7-3.64 416.71s.19 403.87 3.64 416.71c16.09 60.74 61.69 86.03 120.9 67.25 9-2.87 53.65-25.1 116.49-58.24 56.14-29.51 221.29-116.3 367.28-192.93 145.99-76.64 271.29-143.31 278.38-148.1 39.28-25.68 59.59-63.04 53.26-97.52-4.79-26.63-24.33-53.07-52.88-71.65C892 399.37 172.58 22.32 154.95 16.38c-18.97-6.33-43.3-8.24-58.44-4.41z">
                                    </path>
                                </svg>
                            </div>
                            <div className="timebar">
                                <div className="timebar-bar"></div>
                                <div className="timebar-circle"></div>
                                <div className="timebar-time-info">
                                    <div>00:00</div>
                                    <div></div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </li>
            </ul> 
          </div>
        </div>
        //</React.Fragment>             
              
      )  
    }
  
  }
  
  export default Question;