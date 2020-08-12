import React from 'react';
import PropTypes from 'prop-types';

import './Description.css';
import Question from './Question';

class Description extends React.Component {

    static propTypes = {
        
    };

    state = {
      audioDuration: '',          //длительность аудио
      currentAudioTime: '',       //текущее время воспроизведение  
      distance: 0                     //расстояние, на котором расположен кружочек в панели управлении от начала

  }

  
  onLoadedMetadata = () => {
      var audioDuration = document.getElementById("audio2").duration;
      this.setState({
        audioDuration: audioDuration,
        currentAudioTime: 0,
        distance: 0
      });
  }
  startPlayMusic = (EO) => {
    var audio = document.getElementById("audio2");
    console.log(audio);
    if (audio.paused) {
        audio.play();
        this.play();
    } else {
        audio.pause();
        this.pause();
    }
}
play = () => {

  var playerButton = document.getElementById("playback-button2");
  playerButton.classList.add("playing");
  playerButton.classList.remove("paused");
  
  this.interval = setInterval(() => {
      var currentAudioTime = document.getElementById("audio2").currentTime;
      //console.log(currentAudioTime);
      this.setState({
          currentAudioTime: currentAudioTime,
          distance: currentAudioTime / this.state.audioDuration * 100
      });  
      if(currentAudioTime === this.state.audioDuration){
          this.pause();
      }    
      }, 100);
       
  
}

pause = () => {
  var playerButton = document.getElementById("playback-button2");
  playerButton.classList.add('paused');
  playerButton.classList.remove('playing');
  clearInterval(this.interval);
}

setTime = (time) => {
  var minutes = Math.floor(time / 60); 
  var seconds = Math.floor(time - (Math.floor(time/60)*60));
  var minutesVal = minutes; 
  var secondsVal = seconds;
  if(minutes < 10) { 
      minutesVal = '0' + minutes; 
  } 
  if (seconds < 10) {
      secondsVal="0"+seconds;
  }
  
  return minutesVal + ':' + secondsVal;
}


    render() {
    
      let dist = this.state.distance + '%';
     
  
      return (
       
        <div className="description-block"> 
          <div className="description-block-card">
          { (this.props.descAnswer === undefined )//|| this.props.newLevel ) 
            ? <p className="task-instruction">
                <span>Послушайте плеер.</span>
                <span>Выберите птицу из списка.</span>
              </p>
             
            :  <React.Fragment> 
              <div className="card-body">
                <img className="bird-image"
                     src={this.props.image[this.props.clrBtn][this.props.descAnswer]} />
                <ul className="list-group-card">
                  <li><h4>{this.props.variableBirds[this.props.clrBtn][this.props.descAnswer]}</h4></li>
                  <li>{this.props.lat[this.props.clrBtn][this.props.descAnswer]}</li>
                  
                  <li>
                      
                  <div className="audio-player" id="audio-player2" >
                        <audio id="audio2"
                               src={this.props.sound[this.props.clrBtn][this.props.descAnswer]}
                               onLoadedMetadata={this.onLoadedMetadata} />
                       
                        <div className="controls">
                            <div id="playback-button2" className="playback-button paused" onClick={this.startPlayMusic}>
                            <div></div>
                           
                            </div>
                            <div className="timebar" id="timebar2" >
                                <div className="timebar-bar" style={{backgroundImage: 'linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140)'+dist+', rgb(115, 115, 115)'+dist+', rgb(115, 115, 115) 100%)'}}
                                     id="timebar-bar2" /*onClick={this.audioChangeTime}*/></div>
                                <div className="timebar-circle" id="timebar-circle2" style={{left: dist}} ></div>
                                <div className="timebar-time-info">
                                    <div>{this.setTime(this.state.currentAudioTime)}</div>
                                    <div>{this.setTime(this.state.audioDuration)}</div>
                                </div>
                            </div>
                        </div>    
                    </div>
                  </li>  
                </ul>
              </div>
              <span className="bird-description">{this.props.info[this.props.clrBtn][this.props.descAnswer]}

              </span> 
              
              </React.Fragment>
          }      
                    
          </div>
        </div>
       
      )  
    }
  
  }
  
export default Description;