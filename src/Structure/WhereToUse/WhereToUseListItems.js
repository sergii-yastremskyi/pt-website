import React from 'react'
import css from './whereToUse.module.css'
import { nanoid } from 'nanoid'
export default function WhereToUseListItems({content}) {
  return (<>
    {content.map((item)=>(<li key={nanoid()} className={css.whereToUseListItem} >{item}</li>))}
    </>
  )
}
