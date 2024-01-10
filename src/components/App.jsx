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

  // const clickFeedback = name => {
  //   if (name === 'good') {
  //     setGood(prevGood => prevGood + 1);
  //     return;
  //   } else if (name === 'neutral') {
  //     setNeutral(prevNeutral => prevNeutral + 1);
  //     return;
  //   } else if (name === 'bad') {
  //     setBad(prevBad => prevBad + 1);
  //     return;
  //   }
  // };
  const clickFeedback = name  => {
    switch (name) {
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

  const countPositiveFeedback = () => {
    return countTotalFeedback() > 0 && Math.ceil((good / countTotalFeedback()) * 100);
  };

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
              {countTotalFeedback() > 0 ? (
                <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={countTotalFeedback()}
                  positivePercentage={countPositiveFeedback()}
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
