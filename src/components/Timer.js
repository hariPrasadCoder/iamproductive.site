import styled from 'styled-components';

const TimerContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

const QuoteDisplay = styled.div`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 2rem 0;
  max-width: 600px;
  text-align: center;
  font-style: italic;
`;

const TimeDisplay = styled.div`
  font-size: 15vw;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
`;

const TypeDisplay = styled.h2`
  font-size: 3vw;
  color: white;
  margin: 0;
  opacity: 0.9;
`;

// Update the Timer component props to include currentQuote
export const Timer = ({ time, type, currentQuote }) => {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getTypeText = () => {
    switch(type) {
      case 'work':
        return 'Work Time';
      case 'shortBreak':
        return 'Short Break';
      case 'longBreak':
        return 'Long Break';
      default:
        return 'Work Time';
    }
  };

  return (
    <TimerContainer>
      <TypeDisplay>{getTypeText()}</TypeDisplay>
      <TimeDisplay>{formatTime(time)}</TimeDisplay>
      {currentQuote && (
        <QuoteDisplay>
          "{currentQuote.text}"
          <br />
          <small>- {currentQuote.author}</small>
        </QuoteDisplay>
      )}
    </TimerContainer>
  );
};