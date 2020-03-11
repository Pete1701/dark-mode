import {useEffect} from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [value, setValue] = useLocalStorage('dark-mode', false);
    useEffect(() => {
        if(useLocalStorage.value === true) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }        
      });

      return [value, setValue];
}