import React from 'react'
import css from './whereToUse.module.css'
export default function WhereToUseListItems({content}) {
  return (<>
    {content.map((item)=>(<li className={css.whereToUseListItem} >{item}</li>))}
    </>
  )
}
