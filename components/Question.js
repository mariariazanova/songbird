import React from 'react';
import PropTypes from 'prop-types';

import './Question.css';
import img from '../images/bird.jpg';

var svg_playback =[];

class Question extends React.Component {

    interval;
    
    static propTypes = {
      
    };
    state = {
        audioDuration: '',          //длительность аудио
        currentAudioTime: '',       //текущее время воспроизведение  
        distance: 0                     //расстояние, на котором расположен кружочек в панели управлении от начала

    }

    //componentDidUpdate(prevProps, prevState, snapshot) {
    //    if (prevProps.src!==this.props.src) {
    //      this.pause();
    //      this.setState({
    //        distance: 0
    //      })
    //    }
    //}

    startPlayMusic = (EO) => {
        var audio = document.getElementById("audio");
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

        var playerButton = document.getElementById("playback-button");
        playerButton.classList.add("playing");
        playerButton.classList.remove("paused");
        
        this.interval = setInterval(() => {
            var currentAudioTime = document.getElementById("audio").currentTime;
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
        var playerButton = document.getElementById("playback-button");
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
    onLoadedMetadata = () => {
        var audioDuration = document.getElementById("audio").duration;
        this.setState({
          audioDuration: audioDuration,
          currentAudioTime: 0
        });
    }
    //перемотка аудио - пока не работает
    /*audioChangeTime = (EO) => { 
        EO = EO || window.event;

        var progressBar = document.getElementById("timebar-bar");
        console.log("EO.pageX=" + EO.pageX);
        console.log("progressBar.offsetLeft=" + progressBar.offsetLeft);
        console.log("EO.target.offsetLeft=" + EO.target.offsetLeft);
        console.log("progressBar.pageX=" + progressBar.pageX);
        //console.log("progressBar.getBoundingClientRect.left=" + progressBar.getBoundingClientRect.left);
        var mouseX = Math.floor(EO.pageX - progressBar.offsetLeft);
        //var mouseX = Math.floor(EO.pageX - EO.target.offsetLeft);
        //var mouseX = Math.floor(EO.pageX - EO.target.getBoundingClientRect.left+window.pageXOffset);
        console.log("mouseX=" + mouseX);

        var progress = mouseX / (progressBar.offsetWidth / 100);
        console.log("progressBar.offsetWidth=" + progressBar.offsetWidth);
        console.log("progress= " + progress);
        this.setState({
            currentAudioTime : this.state.audioDuration * (progress / 100),
            distance: progress 
        })    
     
    }    
    */
    render() {
    
     let dist = this.state.distance + '%';
               
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
                    <div className="audio-player" id="audio-player" >
                        <audio id="audio"
                               src={this.props.sound[this.props.clrBtn][this.props.rand]}
                               onLoadedMetadata={this.onLoadedMetadata} />
                       
                        <div className="controls">
                            <div id="playback-button" className="playback-button paused" onClick={this.startPlayMusic}>
                            <div></div>
                            {/*   <svg className="" viewBox="-200 0 1200 1000">
                                    <path fill="#00bc8c" d="M96.51 11.97c-31.23 8.05-53.26 32.76-63.42 71.27-3.45 12.84-3.64 29.7-3.64 416.71s.19 403.87 3.64 416.71c16.09 60.74 61.69 86.03 120.9 67.25 9-2.87 53.65-25.1 116.49-58.24 56.14-29.51 221.29-116.3 367.28-192.93 145.99-76.64 271.29-143.31 278.38-148.1 39.28-25.68 59.59-63.04 53.26-97.52-4.79-26.63-24.33-53.07-52.88-71.65C892 399.37 172.58 22.32 154.95 16.38c-18.97-6.33-43.3-8.24-58.44-4.41z">
                                    </path>
      </svg>*/}
                            </div>
                            <div className="timebar" id="timebar" >
                                <div className="timebar-bar" style={{backgroundImage: 'linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140)'+dist+', rgb(115, 115, 115)'+dist+', rgb(115, 115, 115) 100%)'}}
                                     id="timebar-bar" /*onClick={this.audioChangeTime}*/></div>
                                <div className="timebar-circle" id="timebar-circle" style={{left: dist}} ></div>
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
        </div>
        //</React.Fragment>             
              
      )  
    }
  
  }
  
  export default Question;