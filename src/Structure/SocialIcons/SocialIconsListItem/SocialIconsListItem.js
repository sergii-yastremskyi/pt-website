import { nanoid } from 'nanoid';
import React from 'react';
import css from './socialIconsListItem.module.css'
export default function SocialIconsListItem({ list }) {
  return (
    <>
      {list.map(item => (
        <li key={nanoid()} className={css.socialIconsListItem}>
          <a href={item.link}>
            {' '}
            <img src={item.img} alt={item.text} />{' '}
          </a>
        </li>
      ))}
    </>
  );
}
