import React from 'react';
import PropTypes from 'prop-types';
import Description from './Description';

import './Answers.css';

class Answers extends React.Component {

    static propTypes = {
      variableBirds: PropTypes.array.isRequired, 
      descAnswer:PropTypes.number,
      clrBtn: PropTypes.number.isRequired,
      rand: PropTypes.number.isRequired,

    };
  
    state = {
      descAnswer:this.props.descAnswer,
      rand: this.props.rand
    };


    onItemClick = (EO) => {
      console.log(EO.target);
      console.log(EO.target.id);
      //this.setState({ descAnswer: Number(EO.target.id) //[this.props.clrBtn][this.props.rand]
      // });

      (Number(EO.target.id) == this.props.rand) 
       ?  (EO.target.firstChild.className="li-btn green",
          document.getElementById("correct_answer").play())
       : (EO.target.firstChild.className="li-btn red" ,
        document.getElementById("incorrect_answer").play())
       
    };

    

    render() {
    
        const answersList = this.props.variableBirds[this.props.clrBtn].map((item, index) => (
            <li key={index} id={index} className="answers-list-item" onClick={this.onItemClick} > 
              <span className="li-btn"
              //{
                  //(!this.state.descAnswer)
                  //? "li-btn"
                  //: (this.state.descAnswer && (this.state.descAnswer == this.props.rand) )
                  //  ? "li-btn green"
                  //  : "li-btn red"
                      

              //}
              
              ></span>
              {/*<a href="/#" id={index} className="">{item}</a>*/}
              {item}
            </li>
  
                
        ));
     
  
      return (
        //<React.Fragment> 
        <div className="answers-block"> 
          <div className="anwers-block-variants">
            <ul className="answers-list">
              {answersList}
            </ul> 
          </div>
          <Description />
          <button className="next-btn">Next level</button>
        </div>
        //</React.Fragment>             
              
      )  
    }
  
  }
  
export default Answers;