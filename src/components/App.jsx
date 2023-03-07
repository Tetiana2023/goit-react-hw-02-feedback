//  import { Statistic } from '../components/Statistic/Statistic'
import React from 'react';
// import css from './Statistic.module.css';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleIncrementNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleIncrementBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutrale, bad } = this.state;
    return +(good + neutrale + bad);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
       return (
      <div className="Statistic">
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
          <p className="text"> Total:{this.countTotalFeedback()}</p>
          <p className="text"> Positive feedback:{this.countPositiveFeedbackPercentage()}
          </p>
        </div>
      </div>
    );
  }
}
