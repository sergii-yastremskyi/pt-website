import React from 'react';
import css from '../productPageCss.module.css';
export default function PhotoBoothBrandingListItem({ content }) {
  return (
    <>
      {content.map(item => (
        <li className={css.brandingListItem}>
          {
            <img
              className={css.brandingListImg}
              src={item.img}
              alt="Photobooth Branding"
            />
          }
          <p className={css.brandingListDesc}>{item.desc}</p>
          <p className={css.brandingListPrice}>{item.price}</p>
        </li>
      ))}
    </>
  );
}
