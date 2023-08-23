import React, { Component } from 'react';
import { FeedButton, FeedButtonCont } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  onClickButton = e => {
    this.props.addFeedback(e.target.textContent);
  };

  render() {
    return (
      <FeedButtonCont>
        {this.props.options.map(element => {
          return (
            <FeedButton
              key={element}
              onClick={this.onClickButton}
              type="button"
            >
              {element}
            </FeedButton>
          );
        })}
      </FeedButtonCont>
    );
  }
}
