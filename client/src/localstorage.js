import React from 'react';

export const loadState = () => {
    try {
      const state = localStorage.getItem('state')
      
      if (state === null) {
        return undefined;
      }
      return  JSON.parse(state)
      
    } catch (err) {
       
      return undefined;
    }
  };
 
  export const saveState = (data) => {
      
    try {
      const serializedDriversState = JSON.stringify(data);
      localStorage.setItem('state', serializedDriversState)
    } catch (err) {
      // Ignore errors. no time for this now.
    }

  }