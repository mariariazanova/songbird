import React from 'react';
import PropTypes from 'prop-types';

import './Quiz.css';

import Header from './Header';
import Question from './Question';
import Answers from './Answers';
import Description from './Description';

import publicInfo from '../publicInfo.json';


class Quiz extends React.Component {

    static propTypes = {
        
      
    };

    state = {
        score: 0,
        typeBirds: publicInfo.TypeBirds,
        clrBtn: 0,

    };



    render() {
        return (
            <React.Fragment> 
                <Header score={this.state.score} 
                        typeBirds={this.state.typeBirds} 
                        clrBtn={this.state.clrBtn} 
                /> 
               {/* <Question /> */}
               {/* <Answers /> */}
               {/* <Description /> */}
            </React.Fragment>
        )  

    }

}    

export default Quiz; 