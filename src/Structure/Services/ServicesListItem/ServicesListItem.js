import React from 'react'
import { nanoid } from 'nanoid';
import css from '../../Services/services.module.css'
export default function ServicesListItem({services}) {
 
  return (<>
   {services.map(item => (
    <li key={nanoid()} className={css.servicesListItem}>
       <img  className={css.servicesImg} src={item.thumbImg} alt=""/>
     <p> {item.name}</p>
     <p>{item.description}</p>
    </li>
  ))
}
</>)
}
