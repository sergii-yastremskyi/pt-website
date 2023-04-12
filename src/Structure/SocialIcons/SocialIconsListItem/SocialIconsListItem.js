import { nanoid } from 'nanoid';
import React from 'react';
import css from './socialIconsListItem.module.css'
export default function SocialIconsListItem({ list }) {
  return (
    <>
      {list.map(item => (
        <li key={nanoid()} className={css.socialIconsListItem}>
          <a href={item.link}>
            {console.log(item.img)}
         <div className={css.socialIconImgContainer}> {item.img} </div>
      
          </a>
        </li>
      ))}
    </>
  );
}
