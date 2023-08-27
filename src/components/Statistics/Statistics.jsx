import { StatsBlock, StatsValue, StatsLabel } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatsBlock>
      <StatsValue>
        Good: <StatsLabel>{good}</StatsLabel>
      </StatsValue>
      <StatsValue>
        Neutral: <StatsLabel>{neutral}</StatsLabel>
      </StatsValue>
      <StatsValue>
        Bad: <StatsLabel>{bad}</StatsLabel>
      </StatsValue>
      <StatsValue>
        Total: <StatsLabel>{total}</StatsLabel>
      </StatsValue>
      <StatsValue>
        Positive feedback: <StatsLabel>{positivePercentage}%</StatsLabel>
      </StatsValue>
    </StatsBlock>
  );
};
