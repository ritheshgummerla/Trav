import React from 'react';

const useViewport = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  // Add a second state variable "windowHeight" and default it to the current window windowHeight
  const [windowHeight, setWindowHeight] = React.useState(window.innerHeight);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
    // Set the windowHeight in state as well as the windowWidth
    setWindowHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener('orientationchange', handleWindowResize);
    return () => {
      window.removeEventListener('orientationchange', handleWindowResize);
    };
  }, []);

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  // Return both the windowHeight and windowWidth
  return { windowWidth, windowHeight };
};

export default useViewport;
