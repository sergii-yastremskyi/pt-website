import React from 'react';
import css from '../productPageCss.module.css';
export default function PhotoListItem({ list }) {
  return (
    <>
      {list.map(item => (
        <li className={css.photoListItem}>{item}</li>
      ))}
    </>
  );
}
