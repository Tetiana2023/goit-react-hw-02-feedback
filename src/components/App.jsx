//  import { Statistic } from '../components/Statistic/Statistic'
import React from 'react';
// import css from './Statistic.module.css';

export class  App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleIncrementNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleIncrementBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
render(){
  return (
    <div className='Statistic'>
     
     <h1 className="title">Please leave feedback</h1>
        <div>
          <button type="button" onClick={this.handleIncrementGood}>
            Good
          </button>
          <button type="button" onClick={this.handleIncrementNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleIncrementBad}>
            Bad
          </button>
    </div> 
  
    <div>
    <h2 className="title">Statistics</h2>
    <p className="text"> Good:{this.state.good}</p>
    <p className="text"> Neutrale:{this.state.neutral}</p>
    <p className="text"> Bad:{this.state.bad}</p>
    </div>
    </div>)
    
  };
}