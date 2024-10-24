import { useState } from 'react';  // Added this import
import styled from 'styled-components';

const SettingsModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  padding: 2rem;
  border-radius: 20px;
  z-index: 1000;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 1rem;

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.3);
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

export const TimeSettings = ({ isOpen, onClose, settings, onSave }) => {
  const [tempSettings, setTempSettings] = useState({
    work: settings.work / 60,
    shortBreak: settings.shortBreak / 60,
    longBreak: settings.longBreak / 60,
  });

  if (!isOpen) return null;

  return (
    <>
      <Overlay onClick={onClose} />
      <SettingsModal>
        <h2>Timer Settings</h2>
        <div>
          <label>Work Duration (minutes)</label>
          <Input
            type="number"
            value={tempSettings.work}
            onChange={(e) => setTempSettings({
              ...tempSettings,
              work: parseInt(e.target.value)
            })}
          />
        </div>
        <div>
          <label>Short Break (minutes)</label>
          <Input
            type="number"
            value={tempSettings.shortBreak}
            onChange={(e) => setTempSettings({
              ...tempSettings,
              shortBreak: parseInt(e.target.value)
            })}
          />
        </div>
        <div>
          <label>Long Break (minutes)</label>
          <Input
            type="number"
            value={tempSettings.longBreak}
            onChange={(e) => setTempSettings({
              ...tempSettings,
              longBreak: parseInt(e.target.value)
            })}
          />
        </div>
        <Button onClick={() => onSave({
          work: tempSettings.work * 60,
          shortBreak: tempSettings.shortBreak * 60,
          longBreak: tempSettings.longBreak * 60,
        })}>Save</Button>
        <Button onClick={onClose}>Cancel</Button>
      </SettingsModal>
    </>
  );
};