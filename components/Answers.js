import React from 'react';
import PropTypes from 'prop-types';
import Description from './Description';

import './Answers.css';

//let red = [];
//let green = [];

class Answers extends React.Component {

    static propTypes = {
      variableBirds: PropTypes.array.isRequired, 
      descAnswer:PropTypes.number,
      clrBtn: PropTypes.number.isRequired,
      rand: PropTypes.number.isRequired,

    };
  
    state = {
      descAnswer:this.props.descAnswer,
      guessed: this.props.guessed,
      countWrong: 0,
      backgroundColor: ["#444","#444","#444","#444","#444","#444"]
    };

    
    componentWillReceiveProps = (newProps) => { 
      console.log("Answer componentWillReceiveProps");
      if (newProps.newLevel) {
            this.setState({descAnswer:newProps.descAnswer,
                           guessed:false,
                           countWrong:0,
                           backgroundColor: ["#444","#444","#444","#444","#444","#444"],
                           newLevel:false
            });
            
            //this.props.cbReturnNextLevel();
          } else null;
    }

    //componentDidUpdate = () => { 
    //  if (this.state.newLevel) {
    //    this.setState({newLevel:false});
    //  }
    //}
  
   //componentDidUpdate = () => { 
    //  if (this.state.newLevel) {
     //   this.props.cbReturnNextLevel();
    //  }
    //}
  

  
    onItemClick = (EO) => {
      console.log(EO.target);
      console.log(EO.target.id);
      //EO.preventDefault;
      //this.props.descAnswer2(EO.target.id);
      this.setState({ descAnswer: Number(EO.target.id)});

      
      let newColors=[...this.state.backgroundColor]; // копия массива цветов
      newColors[EO.target.id] = "green";

      let newColors2=[...this.state.backgroundColor]; // копия массива цветов
      newColors2[EO.target.id] = "red";
      



      (Number(EO.target.id) == this.props.rand) 
       ?  //EO.target.firstChild.className="li-btn green",
                    
         //(EO.target.firstChild.style.backgroundColor="green",
         (document.getElementById("correct_answer").play(),
          document.getElementById("audio").pause(),

          document.getElementById("playback-button").classList.add('paused'),
          document.getElementById("playback-button").classList.remove('playing'),
          //clearInterval(this.interval),


          this.setState({guessed:true,backgroundColor: newColors }),
          this.props.cbChooseCorrectAnswer(this.state.countWrong)) //кол-бэк в Header
       : (!this.state.guessed)
          ? //(EO.target.firstChild.className="li-btn red" ,
          //(EO.target.firstChild.style.backgroundColor="red",
            (document.getElementById("incorrect_answer").play(),
            this.setState({countWrong: this.state.countWrong +1, backgroundColor: newColors2}))
         : null
         
       
    };

    

    render() {
     
        const answersList = this.props.variableBirds[this.props.clrBtn].map((item, index) => (
            <li key={index} id={index} className="answers-list-item"  onClick={this.onItemClick} > 
              <span className="li-btn" 
              style={{backgroundColor: this.state.backgroundColor[index]}}
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
          <Description descAnswer={this.state.descAnswer} 
                       variableBirds= {this.props.variableBirds}
                       clrBtn={this.props.clrBtn}
                       sound={this.props.sound}
                       oneBird={this.props.description} 
                       image={this.props.image}
                       rand={this.props.rand}
                       info={this.props.info}
                       lat={this.props.lat}
                       newLevel={this.props.newLevel}
                        />
          {/*<button className="next-btn">Next level</button>*/}
        </div>
        //</React.Fragment>             
              
      )  
    }
  
  }
  
export default Answers;