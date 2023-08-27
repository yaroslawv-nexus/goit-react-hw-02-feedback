import { FeedButton, FeedButtonCont } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, addFeedback }) => {
  return (
    <FeedButtonCont>
      {options.map(element => {
        return (
          <FeedButton key={element} onClick={addFeedback} type="button">
            {element}
          </FeedButton>
        );
      })}
    </FeedButtonCont>
  );
};
