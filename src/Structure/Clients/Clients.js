import React from 'react'
import css from './clients.module.css'

export default function Clients() {
  return (
    <div className={css.clients}>
    <p className={css.clientsHeader}>Наші клієнти</p>
    <ul className={css.clientsList}>
      <li className={css.clientsListItem}>
        <img
          src="https://picsum.photos/160/90"
          alt="Girl in a jacket"
          width="160"
          height="123"
        />
      </li>
     
    </ul>
  </div>
  )
}
