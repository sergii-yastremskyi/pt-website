import React from 'react'
import css from './services.module.css'
import sharedCss from '../Shared/shared.module.css'
import ServicesList from './ServicesList'
export default function Services() {
    const serivcesObj=[
    {name:'Photobooth',link:'',thumbImg:'http://via.placeholder.com/220x240',description:'Всего пара минут и ваши воспоминания останутся у вас в виде фото'},
    {name:'Photobooth',link:'',thumbImg:'http://via.placeholder.com/220x240',description:'Всего пара минут и ваши воспоминания останутся у вас в виде фото'},
    {name:'Photobooth',link:'',thumbImg:'http://via.placeholder.com/220x240',description:'Всего пара минут и ваши воспоминания останутся у вас в виде фото'},
    {name:'Photobooth',link:'',thumbImg:'http://via.placeholder.com/220x240',description:'Всего пара минут и ваши воспоминания останутся у вас в виде фото'},
    {name:'Photobooth',link:'',thumbImg:'http://via.placeholder.com/220x240',description:'Всего пара минут и ваши воспоминания останутся у вас в виде фото'},
    {name:'Photobooth',link:'',thumbImg:'http://via.placeholder.com/220x240',description:'Всего пара минут и ваши воспоминания останутся у вас в виде фото'},
    {name:'Photobooth',link:'',thumbImg:'http://via.placeholder.com/220x240',description:'Всего пара минут и ваши воспоминания останутся у вас в виде фото'},
    {name:'Photobooth',link:'',thumbImg:'http://via.placeholder.com/220x240',description:'Всего пара минут и ваши воспоминания останутся у вас в виде фото'}
]
  return (
    <div className={`${css.services} ${sharedCss.container}`}>
    <h2>Наші послуги</h2>

    <ServicesList services={serivcesObj}/>
   
    <button type="button" className={css.orderButton}>
      Замовити послгу
    </button>
  </div>

  )
}
