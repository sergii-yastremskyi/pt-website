import React from 'react'
import css from './howItworks.module.css'
import HowItWorksListIteam from './HowitWorksListItem'
export default function HowItworks() {
    const howItWorksContent = [
        {text:'Доставка та монтаж фотобудки за годину до початку заходу'},
        {text:'Наш персонал допомагає зробити якісну фотографію'},
        {text:'Миттєвий брендинг під стилістику заходу та друк фото'},
        {text:'Відправка фото на E-mail, через AirDrop або посиланням на фото в SMS'},
    ]
  return (
    <> <div className={css.howItsWorks}>
    
    <h2 className={css.howItsWorksHeader}>Як працює фотобудка</h2>
    <ul className={css.howItWorksList}>
    <HowItWorksListIteam content={howItWorksContent}/>
    
    </ul>
  </div></>
  )
}
