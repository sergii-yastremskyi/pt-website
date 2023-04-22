import React from 'react'
import css  from './whyWe.module.css'

export default function WhyWe() {
  return (
    <div className={css.whyWe}>
    <h2 className={css.whyWeHeader}>Чому саме Party Tools</h2>
    <ul className={css.whyWeList}>
      <li className={css.whyWeListItem}>
        <p className={css.whyWeItemNumber}>6+</p>{' '}
        <div className={css.whyWeBrLn}></div>
        <p className={css.whyWeItemText}>
         років приносимо радість та приємні враження
        </p>
      </li>
      <li className={css.whyWeListItem}>
        <p className={css.whyWeItemNumber}>500+</p>{' '}
        <div className={css.whyWeBrLn}></div>
        <p className={css.whyWeItemText}>
          заходів проведено на вищому рівні
        </p>
      </li>
      <li className={css.whyWeListItem}>
        <p className={css.whyWeItemNumber}>100К+</p>
        <div className={css.whyWeBrLn}></div>
        <p className={css.whyWeItemText}>надруковано фотографій</p>
      </li>
    </ul>
  </div>
  )
}
