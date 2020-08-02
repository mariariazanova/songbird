import React from 'react';
import PropTypes from 'prop-types';

import './Quiz.css';

import Header from './Header';
import Question from './Question';
import Answers from './Answers';
import Description from './Description';

import Info from '../InfoBirds.json';
import publicInfo from '../publicInfo.json';


class Quiz extends React.Component {

    static propTypes = {
        
      
    };

    state = {
        score: 0,
        typeBirds: publicInfo.TypeBirds,
        clrBtn: 0,
        sound: Info.Sound,
        description: null,
        rand: Math.round(0 - 0.5 + Math.random() * (4 - 0 + 1)),
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
               {/* <Answers /> */}
               {/* <Description /> */}
            </React.Fragment>
        )  

    }

}    

export default Quiz; 