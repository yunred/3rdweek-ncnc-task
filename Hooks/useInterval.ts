import { useEffect, useRef } from 'react';

function useInterval(callback: () => void, delay: null | number) {
  const savedCallback = useRef<any>();
  useEffect(() => {
    savedCallback.current = callback;
  });
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
export default useInterval;
