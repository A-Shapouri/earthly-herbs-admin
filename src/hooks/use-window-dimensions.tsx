'use clients';
import { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  const handleResize = useDebouncedCallback(() => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, 500);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
