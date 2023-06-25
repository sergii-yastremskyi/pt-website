import React from 'react';
import css from '../productPageCss.module.css';
export default function PossibilitiesListItem({ content }) {
  return (
    <>
      {content.map(item => (
        <li className={css.possibilitiesListItem}>
          <div className={css.possibilitiesListItemContainer}>
            <div className={css.possibilitiesBulletPoint}>
              <img
                className={css.possibilitiesImg}
                alt="number"
                src={item.bulletPoint}
              />
            </div>
            <div className={css.possibilitiesDesc}>
              <h3 className={css.possibilitiesItemTittle}>{item.tittle}</h3>
              <p className={css.possibilitiesText}>{item.desc}</p>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}
