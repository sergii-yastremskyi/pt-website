import React from 'react';
import css from '../productPageCss.module.css';
export default function PhotoBoothDescList({ content }) {
  return (
    <>
      {content.map(item => (
        <li className={css.heroListItem}>{item}</li>
      ))}
    </>
  );
}
