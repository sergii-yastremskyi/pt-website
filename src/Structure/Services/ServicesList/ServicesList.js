import React from 'react'
import css from '../services.module.css'
import ServicesListItem from '../ServicesListItem'
export default function ServicesList({services}) {

  return (<>
     <ul className={css.servicesList}>
      <ServicesListItem services={services}/>
     
    </ul></>
  )
}
