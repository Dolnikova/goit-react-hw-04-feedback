import React, { Component } from 'react';
import { Styled } from './Feedback/FeedbackStyled';
import FeedbackStats from './Feedback/FeedbackStats';
import Feedback from './Feedback/Feedback';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  changeState = evt => {
    const key = evt.target.dataset.type;
    const stateObj = {};
    stateObj[key] = this.state[key] + 1;
    this.setState(stateObj);
  };

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };
  countPositiveTotalPercantage = (total, good) => {
    return total ? Math.ceil((good * 100) / total) : 0;
  };

  render() {
    const good = this.state.good;
    const neutral = this.state.neutral;
    const bad = this.state.bad;
    return (
      <Styled>
        <Feedback
          options={Object.keys(this.state)}
          changeState={this.changeState}
        ></Feedback>
        <FeedbackStats
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback(good, neutral, bad)}
          goodPercentage={this.countPositiveTotalPercantage(
            this.countTotalFeedback(good, neutral, bad),
            good
          )}
        ></FeedbackStats>
      </Styled>
    );
  }
}
export default App;
