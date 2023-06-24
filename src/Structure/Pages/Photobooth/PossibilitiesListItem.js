import React from 'react';
import css from '../productPageCss.module.css';
export default function PossibilitiesListItem({ content }) {
  return (
    <>
      {content.map(item => (
        <li className={css.possibilitiesListItems}>{item.desc}</li>
      ))}
    </>
  );
}
