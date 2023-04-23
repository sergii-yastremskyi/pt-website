import React from 'react'
import css from '../whyWe.module.css'
import { nanoid } from 'nanoid'

export default function WhyWeListItem({content}) {
  return (<>
   { content.map(item=>(<li key={nanoid()} className={css.whyWeListItem}>
        <p className={css.whyWeItemNumber}>{item.header}</p>
        <div className={css.whyWeBrLn}></div>
        <p className={css.whyWeItemText}>
        {item.text}
        </p>
      </li>)) 
   }
      </>
  )
}
