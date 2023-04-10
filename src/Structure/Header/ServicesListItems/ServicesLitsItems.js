import React from 'react';
import { nanoid } from 'nanoid';
import css from '../header.module.css'
export default function ServicesLitsItems({ listItems }) {
  return (
    <>
      {listItems.map(item => (
        <li key={nanoid()} className={css.servisecListItem}>
          {item.text}
        </li>
      ))}
    </>
  );
}
