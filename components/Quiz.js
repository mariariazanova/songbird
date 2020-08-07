import React from 'react';
import PropTypes from 'prop-types';

import './Quiz.css';

import Header from './Header';
import Question from './Question';
import Answers from './Answers';
import Description from './Description';

import Info from '../InfoBirds.json';
import publicInfo from '../publicInfo.json';
import CorrectAnswer from '../audio/correct_answer.mp3';
import IncorrectAnswer from '../audio/incorrect_answer.mp3';


class Quiz extends React.Component {

    static propTypes = {
        
      
    };

    state = {
        score: 0,
        typeBirds: publicInfo.TypeBirds,
        clrBtn: 0,
        sound: Info.Sound,
        description: null,
        rand: Math.floor(Math.random() * (5 - 0 + 1))+0,
        image: Info.Image,
        variableBirds: Info.VariableBirds,

    };



    render() {
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
                />
                <Answers variableBirds= {this.state.variableBirds} 
                         descAnswer={this.handleDesc} 
                         clrBtn={this.state.clrBtn}
                         rand={this.state.rand}
                />
               {/* <Description /> */}
               {/*<NextButton onNextClick={this.onNextClick} guessed={guessed} />*/ }
                <audio id="correct_answer" src={CorrectAnswer} />
                <audio id="incorrect_answer" src={IncorrectAnswer} /> 
            </React.Fragment>
        )  

    }

}    

export default Quiz; 