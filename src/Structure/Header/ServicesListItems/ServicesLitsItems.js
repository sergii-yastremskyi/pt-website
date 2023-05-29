import React from 'react';
import { nanoid } from 'nanoid';
import css from '../header.module.css';
import { Link } from 'react-router-dom';
export default function ServicesLitsItems({ listItems }) {
  return (
    <>
      {listItems.map(item => (
        <li key={nanoid()} className={css.servisecListItem}>
          <button
            className={css.servicesButton}
            type="button"
            onClick={item.clickHandler}
          >
            {item.text}
          </button>
          {/* <Link to={item.link}>{item.text}</Link> */}
        </li>
      ))}
    </>
  );
}
