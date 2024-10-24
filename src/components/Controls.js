import styled from 'styled-components';
import { FaPlay, FaPause, FaRedo, FaCog } from 'react-icons/fa';  // Added FaCog here

const ControlsContainer = styled.div`
  position: fixed;
  bottom: 8rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 1.5rem;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.2rem;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
`;

export const Controls = ({ isActive, setIsActive, resetTimer, onSettingsClick }) => {
  return (
    <ControlsContainer>
      <Button onClick={() => setIsActive(!isActive)}>
        {isActive ? <FaPause /> : <FaPlay />}
      </Button>
      <Button onClick={resetTimer}>
        <FaRedo />
      </Button>
      <Button onClick={onSettingsClick}>
        <FaCog />
      </Button>
    </ControlsContainer>
  );
};