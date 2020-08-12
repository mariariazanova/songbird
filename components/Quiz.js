import React from 'react';
import PropTypes from 'prop-types';

import './Quiz.css';

import Header from './Header';
import Question from './Question';
import Answers from './Answers';
import Description from './Description';
import Final from './Final';

import Info from '../InfoBirds.json';
import publicInfo from '../publicInfo.json';
import CorrectAnswer from '../audio/correct_answer.mp3';
import IncorrectAnswer from '../audio/incorrect_answer.mp3';


class Quiz extends React.Component {
    static propTypes = {
    };
    constructor(props) {
        super(props);
        //this.correctAudioPlayer = React.createRef();
        //this.wrongAudioPlayer = React.createRef();
    this.state = {
        score: 0,
        typeBirds: publicInfo.TypeBirds,
        clrBtn: 0,
        sound: Info.Sound,
        description: null,
        rand: Math.floor(Math.random() * (5 - 0 + 1))+0,
        image: Info.Image,
        variableBirds: Info.VariableBirds,
        lat: Info.Lat,
        info: Info.InfoBirds,
        count: 5,
        descAnswer: undefined,
        guessed: false,
        newLevel: false,

        //arrRed: [],
        //arrGreen: [],
    };
    } 
    showScore = (countWrong) => {
        this.setState({
            score:this.state.score+ this.state.count - countWrong,
            guessed: true,
            count:5,
            newLevel: false,
        });
    };

    changeLevel = (EO) => {
        this.setState({
            newLevel: true,
            clrBtn: this.state.clrBtn + 1,
            guessed: false,
            descAnswer: undefined,
            rand: Math.floor(Math.random() * (5 - 0 + 1))+0,

        });    
    }; 

    startAgain = () => {
        this.setState({
            clrBtn: 0,
            score: 0,

        });
    };

    /*returnNextLevel = (EO) => {
        this.setState({
            newLevel: false,
        });    
    }   
    */  
    /*
    handleDesc = (EO) => {
        if (Number(EO) == this.state.rand && this.state.arrGreen.length == 0) {
            this.correctAudioPlayer.current.currentTime = 0;
            this.correctAudioPlayer.current.play();
            this.setState ({
                score: this.state.count + this.state.score,
                arrGreen: this.state.arrGreen.concat(EO)
            });
        } else if (this.state.rand != EO && !this.state.arrRed.includes(EO) && this.state.arrGreen.length == 0) { 
            this.wrongAudioPlayer.current.currentTime = 0;
            this.wrongAudioPlayer.current.play();
            this.setState({
                arrRed: this.state.arrRed.concat(EO),
                count: this.state.count - 1,
            });
            } else {


            }
 
    }    
    */
    render() {
        if (this.state.clrBtn === 6) {
          return (
            <React.Fragment> 
                <Header score={this.state.score} 
                        typeBirds={this.state.typeBirds} 
                        clrBtn={this.state.clrBtn} 
                /> 
                <Final score={this.state.score}
                       cbNewRound={this.startAgain} 
                />
            </React.Fragment> 
          )
        } else {   
           return ( 
            <React.Fragment> 
                <Header score={this.state.score} 
                        typeBirds={this.state.typeBirds} 
                        clrBtn={this.state.clrBtn} 
                /> 
                <Question sound={this.state.sound} 
                          clrBtn={this.state.clrBtn} 
                          oneBird={this.state.description} 
                          image={this.state.image}
                          rand={this.state.rand}
                          variableBirds= {this.state.variableBirds}
                          guessed={this.state.guessed}  
                />
                <Answers variableBirds= {this.state.variableBirds} 
                         descAnswer={this.state.descAnswer} 
                         //descAnswer2={this.handleDesc} 
                         clrBtn={this.state.clrBtn}
                         rand={this.state.rand}
                         sound={this.state.sound}
                         oneBird={this.state.description} 
                         image={this.state.image}
                         lat={this.state.lat}
                         info={this.state.info}
                         newLevel={this.state.newLevel}
                         guessed={this.state.guessed}
                         
                         cbChooseCorrectAnswer = {this.showScore}
                         //cbReturnNextLevel = {this.returnNextLevel}

                        // arrRed={this.state.arrRed}
                        // arrGreen={this.state.arrGreen}
                />
            
                <div className="next-level">
                    {(this.state.guessed) 
                    ? <button className="btn-next-level btn-green" onClick={e => this.changeLevel()}>Следующий уровень</button>
                    : <button className="btn-next-level btn-grey" disabled onClick={e => this.changeLevel()}>Следующий уровень</button>
                    }
                    <audio id="correct_answer" src={CorrectAnswer} 
                    //ref={this.correctAudioPlayer}
                    />
                    <audio id="incorrect_answer" src={IncorrectAnswer} 
                    //ref={this.wrongAudioPlayer}
                    /> 
                </div>
               
                
            </React.Fragment>
           ) 
        } 

    }

}    

export default Quiz; 