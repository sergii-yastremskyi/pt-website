import React from 'react';
import { useEffect } from 'react';

export default function useScrollToPages(elementId) {
  useEffect(() => {
    const elem = document.getElementById(elementId);
    console.log('elementId', elementId);
    console.log(elem);
    if (elem) {
      setTimeout(() => {
        elem.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  });
}
