import React from 'react'
import css from './whereToUse.module.css'
import whereToUseImg from '../../Assets/img/where_to_use.jpg'
import WhereToUseListItems from './WhereToUseListItems'
import sharedCss from '../Shared/shared.module.css'
export default function WhereToUse() {
    const whereToUseContent = [
         'Виставки',
         'Корпоративні заходи',
         'Вечірки',
         'Спортивні події',
         'Весілля та річниці',
         'Дні народження']
  return (<>
      <div className={`${css.whereToUse} ${sharedCss.container}`}>
    <h2 className={css.whereToUseHeader}>Де можна використати</h2>
    <div className={css.whereToUseContent}>
    <div className={css.textContent}>
    <ul className={css.whereToUseList}>
     <WhereToUseListItems content={whereToUseContent}/>
    </ul>
    <p>
      і це далеко не повний список, де фотобука від Party Tools буде
      розважати ваших гостей
    </p>
    </div>
    <img
      className={css.whereToUseImg}
      src={whereToUseImg}
      alt="де використовувати фотобудку"
    />
    </div>
  </div></>
  )
}
