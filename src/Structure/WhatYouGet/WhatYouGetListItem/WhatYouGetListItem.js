import { nanoid } from 'nanoid'
import React from 'react'
import css from '../whatYouGet.module.css'
export default function WhatYouGetListItem({content}) {
  return (<>
    {content.map((item)=>(<li key={nanoid()} className={css.whatYouGetListItem}>
    <img alt='' src={item.img} className={css.whatYouGetImg}/>
       <p className={css.whatYouGetItemBold}>{item.header}</p>
       <p className={css.whatYouGetItemText}>
         {item.text}
       </p>
      </li>)
      )
    }
    </>
  )
}
