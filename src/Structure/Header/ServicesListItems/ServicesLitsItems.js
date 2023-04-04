import React from 'react';
import { nanoid } from 'nanoid';
export default function ServicesLitsItems({ listItems, style }) {
  return (
    <>
      {listItems.map(item => (
        <li key={nanoid()} className={style}>
          {item.text}
        </li>
      ))}
    </>
  );
}
