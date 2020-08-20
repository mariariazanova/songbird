import React from 'react';
import PropTypes from 'prop-types';

import './Question.css';
import img from '../images/bird.jpg';
import img_volume from '../images/sound1.png';

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

    
    componentWillUnmount() {
        console.log("CWU");
        clearInterval(this.interval);
        //this.interval=0;
        //document.getElementById("audio").currentTime =0;
    }

    startPlayMusic = (EO) => {
        var audio = document.getElementById("audio");
        //console.log(audio);
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
            if (document.getElementById("audio"))
            {var currentAudioTime = document.getElementById("audio").currentTime;
           
          
            this.setState({
                currentAudioTime: currentAudioTime,
                distance: currentAudioTime / this.state.audioDuration * 100
            });  
            if(currentAudioTime === this.state.audioDuration){
                this.pause();
            } 
        }
        else {null}   
            }, 100);


/*
        this.interval = setInterval(() => {
            if (document.getElementById("audio"))
            {var currentAudioTime = document.getElementById("audio").currentTime;}
            else {null}
          
            this.setState({
                currentAudioTime: currentAudioTime,
                distance: currentAudioTime / this.state.audioDuration * 100
            });  
            if(currentAudioTime === this.state.audioDuration){
                this.pause();
            }    
            }, 100);
*/            
        
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

    soundChange = (EO) => {
        var audio = document.getElementById("audio");
        var volume = EO.target.value;
        console.log(volume);
        audio.volume = volume;

        //var volumeScale = document.getElementById('volume-control');
        //volumeScale.style.background = "red";
    
        //var volume = volumeScale.value / 100;
        //var audio = document.getElementById("audio");
        //audio.volume = volume;
        
    }

    render() {
    
     let dist = this.state.distance + '%';
     //console.log("Правильный ответ №" +(this.props.rand+1));         
      return (
        //<React.Fragment> 
        <div className="question-panel">
              <img src={
                  (this.props.guessed)
                  ? this.props.image[this.props.clrBtn][this.props.rand]
                  : img
                  } className="bird-image" />
          <div className="">
            <ul className="question-panel-aside">
                <li className="question-panel-item">
                    
                       { (this.props.guessed)
                        ? <h3>{this.props.variableBirds[this.props.clrBtn][this.props.rand]}</h3>
                        : <h3>******</h3>
                       }
                    
                </li>
                <li className="question-panel-item">
                    <div className="audio-player" id="audio-player" >
                        <audio id="audio"
                               src={this.props.sound[this.props.clrBtn][this.props.rand]}
                               onLoadedMetadata={this.onLoadedMetadata} />
                       
                        <div className="controls">
                            <div id="playback-button" className="playback-button paused" onClick={this.startPlayMusic}>
                            <div></div>
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
                            
                            <div id="volume_control">
                                    <label id="rngVolume_label" >
                                    <input type="range" id="rngVolume" min="0" max="1" 
                                           step="0.01" defaultValue="0.5" 
                                           onChange={this.soundChange}/>
                                    
                                    </label>
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