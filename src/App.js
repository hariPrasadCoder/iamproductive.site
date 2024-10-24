// App.js
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Confetti from 'react-confetti';
import { GlobalStyles } from './styles/GlobalStyles';
import { Timer } from './components/Timer';
import { Controls } from './components/Controls';
import { Settings } from './components/Settings';
import { TimeSettings } from './components/TimeSettings';
import { useTimer } from './hooks/useTimer';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const { 
    time, 
    isActive, 
    type, 
    settings,
    showConfetti,
    currentQuote,
    setTime, 
    setIsActive, 
    changeType,
    updateSettings,
    startTimer
  } = useTimer();

  const resetTimer = () => {
    setIsActive(false);
    setTime(settings[type]);
  };

  return (
    <>
      <GlobalStyles />
      {showConfetti && <Confetti 
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={false}
        numberOfPieces={500}
      />}
      <Timer 
        time={time} 
        type={type} 
        currentQuote={currentQuote}
      />
      <Controls 
        isActive={isActive} 
        setIsActive={(active) => {
          if (active) {
            startTimer();
          } else {
            setIsActive(false);
          }
        }}
        resetTimer={resetTimer}
        onSettingsClick={() => setShowSettings(true)}
      />
      <Settings 
        currentType={type}
        onTypeChange={changeType}
      />
      <TimeSettings 
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        settings={settings}
        onSave={(newSettings) => {
          updateSettings(newSettings);
          setShowSettings(false);
        }}
      />
      <ToastContainer />
    </>
  );
}

export default App;