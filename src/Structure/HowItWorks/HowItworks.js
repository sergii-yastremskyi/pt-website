import React from 'react'
import css from './howItworks.module.css'
export default function HowItworks() {
  return (
    <> <div className={css.howItsWorks}>
    <h2 className={css.howItsWorksHeader}>Як працює фотобудка</h2>
    <ul className={css.howItWorksList}>
      <li className={css.howItWorksListItem}>
        <div className={css.howItWorksBulletPoint}>1</div>
        <p className={css.howItWorksListItemText}>
          Доставка та монтаж фото
        </p>
      </li>
      <li className={css.howItWorksListItem}>
        <div className={css.howItWorksBulletPoint}>1</div>
        <p className={css.howItWorksListItemText}>
          Доставка та монтаж фото
        </p>
      </li>
      <li className={css.howItWorksListItem}>
        <div className={css.howItWorksBulletPoint}>1</div>
        <p className={css.howItWorksListItemText}>
          Доставка та монтаж фото
        </p>
      </li>
      <li className={css.howItWorksListItem}>
        <div className={css.howItWorksBulletPoint}>1</div>
        <p className={css.howItWorksListItemText}>
          Доставка та монтаж фото
        </p>
      </li>
    </ul>
  </div></>
  )
}
