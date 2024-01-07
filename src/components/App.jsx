import { Component } from 'react';
import './App.css';

import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { DescriptionMessage } from './DescriptionMessage/DescriptionMessage';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickFeedback = option => {
    const stateKey = option;
    this.setState(prevState => {
      return {
        [stateKey]: prevState[stateKey] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const { good } = this.state;
    return totalFeedback > 0 && Math.ceil((good / totalFeedback) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const PositiveFeedbackPercentege = this.countPositiveFeedbackPercentage();
    return (
      <>
        <div className="container">
          <div className="wrapper">
            <Section title="Please leave feedback">
              <FeedbackOptions
                options={Object.keys(this.state)}
                onLeaveFeedback={this.clickFeedback}
              />
            </Section>
            <Section title={'Statistics'}>
              {totalFeedback > 0 ? (
                <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={totalFeedback}
                  positivePercentage={PositiveFeedbackPercentege}
                />
              ) : (
                <DescriptionMessage message="There is no feedback" />
              )}
            </Section>
          </div>
        </div>
      </>
    );
  }
}

export default App;
