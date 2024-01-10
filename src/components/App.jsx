import { useState } from 'react';
import './App.css';

import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { DescriptionMessage } from './DescriptionMessage/DescriptionMessage';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

const App =()=> {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickFeedback = event => {
    const stateKey = event.target.textContent.toLowerCase();
    
    switch (stateKey) {
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
        return;
    }
  };
    
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback > 0 && Math.ceil((good / totalFeedback) * 100);
  };

    const totalFeedback = countTotalFeedback();
    const PositiveFeedbackPercentege = countPositiveFeedbackPercentage();
    return (
      <>
        <div className="container">
          <div className="wrapper">
            <Section title="Please leave feedback">
              <FeedbackOptions
                options={['good', 'neutral', 'bad']}
                onLeaveFeedback={clickFeedback}
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

export default App;
