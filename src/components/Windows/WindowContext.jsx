import { createContext, useContext } from 'react';

export const WindowContext = createContext(null);

export const useWindow = () => {
  return useContext(WindowContext);
};
