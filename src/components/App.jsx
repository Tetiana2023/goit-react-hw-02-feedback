import { Component } from 'react';
import { Statistic } from './Statistic/Statistic';
import React from 'react';
import { Feedback } from './Feedback/Feedback';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
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

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    let total = 0; 
     total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage() {
    const { good, bad, neutral } = this.state;
    
    let count = 0;
    count = (good / (good + bad + neutral)) * 100;
    return Math.round(count);
    // return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <Feedback
            handleIncrementGood={this.handleIncrementGood}
            handleIncrementNeutral={this.handleIncrementNeutral}
            handleIncrementBad={this.handleIncrementBad}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback"></Notification> 
          ) : (<Statistic
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />)}
                  
        </Section>
      </div>
    );
  }
}
