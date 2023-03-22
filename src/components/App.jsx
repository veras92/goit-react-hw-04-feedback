import React from 'react';
import { Statistics } from './Statistics/Statistics';
import { Feedback } from './FeedbackOption/FeedbackOption';
import Notification from './Notification/Notification';
import { Section } from './Section/Section';
import { Wraper } from './App.Styled';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackVote = e => {
    const currentBtnId = e.target.id;
    this.setState(prevState => ({
      [currentBtnId]: prevState[currentBtnId] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => acc + el, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = this.state.good / this.countTotalFeedback();

    return percentage ? Math.ceil(percentage * 100) : 0;
  };

  render() {
    this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <Wraper className="App">
        <Section title="Please leave feedback">
          <Feedback
            onLeaveFeedback={this.handleFeedbackVote}
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
  }
}

export default App;
