import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { storage } from "utils/storage";

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export function usePersistentState<T>(
  key: string,
  initialState: T
): Response<T> {
  const [state, setState] = useState(() => {
    const storageValue = storage.get(key);

    if (storageValue) {
      return storageValue;
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    if (localStorage.hasOwnProperty(key)) {
      storage.put(key, state);
    } else {
      storage.post(key, state);
    }
  }, [key, state]);

  return [state, setState];
}
