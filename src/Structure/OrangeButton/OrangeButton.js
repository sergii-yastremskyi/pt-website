import React from 'react';
import css from './orangeButton.module.css';
export default function OrangeButton({ label, onPress }) {
  return (
    <button onClick={onPress} type="button" className={css.button}>
      {label}
    </button>
  );
}
