import React from 'react';
import PropTypes from 'prop-types';


export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>   
    <div>
      <p> Good:{good}</p>
      <p> Neutrale:{neutral}</p>
      <p> Bad:{bad}</p>
      <p> Total:{total}</p>
      <p> Positive feedback:{positivePercentage}%</p>
    </div> 
    </>
  );
};

Statistic.propType = {
    good:PropTypes.number.isRequired,
    neutral:PropTypes.number.isRequired,
    bad:PropTypes.number.isRequired,
    total:PropTypes.number,
    positivePercentage:PropTypes.number,

}

//   render() {
//     return (
//       <div className="Statistic">
//         <h1 className={css.title}>Please leave feedback</h1>
//         <div>
//           <button type="button" onClick={this.handleIncrementGood}>
//             Good
//           </button>
//           <button type="button" onClick={this.handleIncrementNeutral}>
//             Neutral
//           </button>
//           <button type="button" onClick={this.handleIncrementBad}>
//             Bad
//           </button>
//         </div>
//         <div>
//           <h2 className="title">Statistics</h2>
//           <p className="text"> Good:{this.state.good}</p>
//           <p className="text"> Neutrale:{this.state.neutral}</p>
//           <p className="text"> Bad:{this.state.bad}</p>
//           <p className="text"> Total:{this.countTotalFeedback()}</p>
//           <p className="text"> Positive feedback:{this.countPositiveFeedbackPercentage()}
//           </p>
//         </div>
//       </div>
//     );
//   }
// }
