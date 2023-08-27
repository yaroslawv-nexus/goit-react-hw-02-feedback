import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = e => {
    const review = e.target.textContent;
    this.setState(prevState => ({ [review]: prevState[review] + 1 }));
  };

  getTotalSum() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    if (good === 0) {
      return 0;
    }
    const result = (good / this.getTotalSum()) * 100;
    return Math.round(result);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalSum = this.getTotalSum();
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
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )) || <Notification message="There is no feedback"></Notification>}
      </div>
    );
  }
}
