import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function useClickHandler(prop) {
  const navigate = useNavigate();

  const name = prop.name;
  console.log('insideHook', name);
  const handleClick = () => {
    // useClickHandler(e);

    const elem = document.getElementById(name);
    if (!elem) {
      navigate({ pathname: '/', search: `?scroll=${name}` });
    } else {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return handleClick;
}
