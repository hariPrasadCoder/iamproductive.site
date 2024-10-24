import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family: 'Inter', sans-serif;
    background: linear-gradient(
      300deg,
      #ff6b6b,
      #4ecdc4,
      #45b7d1,
      #96c93d,
      #e056fd,
      #ff7675
    );
    background-size: 300% 300%;
    animation: gradientShift 15s ease infinite;
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  * {
    box-sizing: border-box;
  }
`;