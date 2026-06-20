// useDebounce search bar
import { useState, useEffect } from "react";

export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup: se value cambia prima che scada il delay, annulla il timeout precedente
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}