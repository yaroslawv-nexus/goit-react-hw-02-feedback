import React, { Component } from 'react';
import { FeedButton, FeedButtonCont } from './FeedbackOptions.styled';

export class Feedback extends Component {
  onClickButton = e => {
    this.props.addFeedback(e.target.textContent);
  };

  render() {
    return (
      <FeedButtonCont>
        <FeedButton onClick={this.onClickButton} type="button">
          good
        </FeedButton>
        <FeedButton onClick={this.onClickButton} type="button">
          neutral
        </FeedButton>
        <FeedButton onClick={this.onClickButton} type="button">
          bad
        </FeedButton>
      </FeedButtonCont>
    );
  }
}
