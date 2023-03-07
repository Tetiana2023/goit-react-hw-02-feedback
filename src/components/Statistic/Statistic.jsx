import React from 'react';
import css from './Statistic.module.css';

export class Statistic extends React.Component {
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
  render() {
    return (
      <div className="Statistic">
        <h1 className={css.title}>Please leave feedback</h1>
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
      </div>
    );
  }
}

// export default Statistic;

// export const Statistic = ()=> {
//     return (
//          <div className="Statistic">
//         <h1 className={css.title}>Please leave feedback</h1>
//         <div>
//             <button type="submit">Good</button>
//             <button type="submit">Neutral</button>
//             <button type="submit">Bad</button>
//         </div>
//     </div>
//     );
//    }
