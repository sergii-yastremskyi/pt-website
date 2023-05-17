import React from 'react';
import css from '../clients.module.css';
export default function ClientListItem({ content }) {
  return (
    <>
      {content.map(item => (
        <li className={css.clientsListItem}>
          <img alt="" src={item.img} className={css.clientsImg} />
        </li>
      ))}
    </>
  );
}
