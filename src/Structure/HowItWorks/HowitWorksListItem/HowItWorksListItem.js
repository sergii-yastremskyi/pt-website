import React from 'react'
import css from '../howItworks.module.css'
import { nanoid } from 'nanoid'
export default function HowItWorksListItem({content}) {
  return (
  <>
     {
      content.map((item,index)=>( <li key={nanoid} className={css.howItWorksListItem}>
        <div className={css.howItWorksBulletPoint}>{index+1}</div>
        <p className={css.howItWorksListItemText}>
          {item.text}
        </p>
      </li>))
    
   }</>
  )
}
