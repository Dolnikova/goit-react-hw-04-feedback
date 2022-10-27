import React from 'react';
import { Styled } from './Feedback/FeedbackStyled';
import FeedbackStats from './Feedback/FeedbackStats';
import Feedback from './Feedback/Feedback';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function changeState(evt) {
    const key = evt.target.dataset.type;
    if (key === 'good') setGood(good + 1);
    else if (key === 'neutral') setNeutral(neutral + 1);
    else if (key === 'bad') setBad(bad + 1);
  }

  function countTotalFeedback(good, neutral, bad) {
    return good + neutral + bad;
  }
  const countPositiveTotalPercantage = (total, good) => {
    return total ? Math.ceil((good * 100) / total) : 0;
  };

  return (
    <Styled>
      <Feedback
        options={['good', 'neutral', 'bad']}
        changeState={changeState}
      ></Feedback>
      <FeedbackStats
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback(good, neutral, bad)}
        goodPercentage={countPositiveTotalPercantage(
          countTotalFeedback(good, neutral, bad),
          good
        )}
      ></FeedbackStats>
    </Styled>
  );
};
