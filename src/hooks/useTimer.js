import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getRandomQuote } from './quotes';

const DEFAULT_SETTINGS = {
  work: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60
};

export const useTimer = () => {
  const [settings, setSettings] = useState(
    JSON.parse(localStorage.getItem('timerSettings')) || DEFAULT_SETTINGS
  );
  const [time, setTime] = useState(settings.work);
  const [isActive, setIsActive] = useState(false);
  const [type, setType] = useState('work');
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    localStorage.setItem('timerSettings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    let interval;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      handleTimerComplete();
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleTimerComplete = () => {
    setIsActive(false);
    setShowConfetti(true);
    
    // Show notification
    toast.success(`${type.charAt(0).toUpperCase() + type.slice(1)} session completed!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    // Hide confetti after 5 seconds
    setTimeout(() => setShowConfetti(false), 5000);
  };

  const changeType = (newType) => {
    setIsActive(false);
    setType(newType);
    setTime(settings[newType]);
  };

  const updateSettings = (newSettings) => {
    setSettings(newSettings);
    setTime(newSettings[type]);
  };

  const [currentQuote, setCurrentQuote] = useState(null);

  const startTimer = () => {
    setIsActive(true);
    const quote = getRandomQuote();
    setCurrentQuote(quote);
    toast.info(`"${quote.text}" - ${quote.author}`, {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return { 
    time, 
    isActive, 
    type, 
    settings,
    showConfetti,
    setTime, 
    setIsActive, 
    setType,
    changeType,
    updateSettings,
    currentQuote,
    startTimer
  };
};