import {useEffect} from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [value, setValue] = useLocalStorage('dark-mode', false);
    useEffect(() => {
        // const body = document.querySelector('body')
        // return value ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
        if(value === true) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }        
      }, [value]);

      return [value, setValue];
}