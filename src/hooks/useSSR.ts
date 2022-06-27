import { useState, useEffect } from 'react';

const useSSR = () => {
  const [isSSR, setIsSSR] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      setIsSSR(true);
    }
  }, []);
  return isSSR;
};

export { useSSR };
