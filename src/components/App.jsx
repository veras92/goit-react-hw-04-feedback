import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Feedback } from './FeedbackOption/FeedbackOption';
import Notification from './Notification/Notification';
import { Section } from './Section/Section';
import { Wraper } from './App.Styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedbackVote = currentBtnId => {
    switch (currentBtnId) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const percentage = total ? Math.ceil((good / total) * 100) : 0;
    return percentage;
  };

  const total = countTotalFeedback();
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();

  return (
    <Wraper className="App">
      <Section title="Please leave feedback">
        <Feedback
          onLeaveFeedback={handleFeedbackVote}
          options={['good', 'neutral', 'bad']}
        />
      </Section>

      <Section title="Statistics">
        {total !== 0 ? (
          <Statistics
            goodCount={good}
            neutralCount={neutral}
            badCount={bad}
            total={total}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </Wraper>
  );
};

export default App;
