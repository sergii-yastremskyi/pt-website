import  { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';
export default function useIsDesktop() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let desktop = false;
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener(
      'resize',
      throttle(() => handleResize(), 1000)
    );
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  if (windowWidth > 740) {
    desktop = true;
  }
  return desktop;
}
