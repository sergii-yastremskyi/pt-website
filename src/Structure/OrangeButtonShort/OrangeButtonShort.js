import React from 'react';
import css from './orangeButtonShort.module.css';
export default function OrangeButtonShort({ label, onPress }) {
  return (
    <button onClick={onPress} type="button" className={css.button}>
      {label}
    </button>
  );
}
