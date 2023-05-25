import React from 'react';
import { nanoid } from 'nanoid';
import css from '../header.module.css';
import { Link } from 'react-router-dom';
export default function ServicesLitsItems({ listItems }) {
  return (
    <>
      {listItems.map(item => (
        <li key={nanoid()} className={css.servisecListItem}>
          <Link to={item.link}>{item.text}</Link>
        </li>
      ))}
    </>
  );
}
