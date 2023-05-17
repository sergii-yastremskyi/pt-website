import React from 'react';
import css from '../smallImg.module.css';
import { nanoid } from 'nanoid';
export default function SmallImgsListItem({ content }) {
  return (
    <>
      {content.map(item => (
        <li key={nanoid()} className={css.smallImgListItem}>
          <img alt="" src={item.img} className={css.smallImgsListItemImg} />
        </li>
      ))}
    </>
  );
}
