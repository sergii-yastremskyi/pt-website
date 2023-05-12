import React from 'react'
import { nanoid } from 'nanoid';
import css from '../../Services/services.module.css'
export default function ServicesListItem({services}) {
 
  return (<>
   {services.map(item => (
    <li key={nanoid()} className={css.servicesListItem}>
       <img  className={css.servicesImg} src={item.thumbImg} alt=""/>
     <p className={css.servicesHeader}> {item.name}</p>
     <p className={css.servicesDescrioption}>{item.description}</p>
    </li>
  ))
}
</>)
}
