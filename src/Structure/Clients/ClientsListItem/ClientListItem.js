import React from 'react';
import css from '../clients.module.css';
import { nanoid } from 'nanoid';
export default function ClientListItem({ content }) {
  return (
    <>
      {content.map(item => (
        <li key={nanoid()} className={css.clientsListItem}>
          <img alt="" src={item.img} className={css.clientsImg} />
        </li>
      ))}
    </>
  );
}
