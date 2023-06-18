import React, { useEffect, useRef } from 'react';

export const useScrollTo = elemId => {
  useEffect(() => {
    const value = window.location.search.split(`?scroll=`)[1];
    if (value === elemId) {
      const elem = document.getElementById(value);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }
  }, []);
};
