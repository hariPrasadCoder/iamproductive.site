import styled from 'styled-components';

const SettingsContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  display: flex;
  gap: 1rem;
`;

const TimeButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const Settings = ({ currentType, onTypeChange }) => {
  return (
    <SettingsContainer>
      <TimeButton 
        active={currentType === 'work'} 
        onClick={() => onTypeChange('work')}
      >
        Work
      </TimeButton>
      <TimeButton 
        active={currentType === 'shortBreak'} 
        onClick={() => onTypeChange('shortBreak')}
      >
        Short Break
      </TimeButton>
      <TimeButton 
        active={currentType === 'longBreak'} 
        onClick={() => onTypeChange('longBreak')}
      >
        Long Break
      </TimeButton>
    </SettingsContainer>
  );
};