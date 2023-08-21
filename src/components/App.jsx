import React, { Component } from 'react';
import { Section } from './Section/Section';
import { Feedback } from './FeedbackOptions/FeedbackOptions';
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
    this.setState({ [review]: this.state[review] + 1 });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalSum = getTotalSum(good, neutral, bad);
    return (
      <div>
        <Section title="Please leave feedback">
          <Feedback addFeedback={this.addFeedback} />
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
