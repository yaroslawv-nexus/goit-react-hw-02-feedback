import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import {
  getTotalSum,
  countPositiveFeedbackPercentage,
} from '../helpers/helpers';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = review => {
    this.setState(prevState => ({ [review]: prevState[review] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalSum = getTotalSum(good, neutral, bad);
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            addFeedback={this.addFeedback}
            options={Object.keys(this.state)}
          />
        </Section>
        {(Boolean(totalSum) && (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalSum}
              positivePercentage={countPositiveFeedbackPercentage(
                good,
                totalSum
              )}
            />
          </Section>
        )) || <Notification message="There is no feedback"></Notification>}
      </div>
    );
  }
}
