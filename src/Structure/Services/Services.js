import React from 'react'
import css from './services.module.css'
import sharedCss from '../Shared/shared.module.css'
import ServicesList from './ServicesList'
import OrangeButton from '../OrangeButton'
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
];
const buttonLabel ='Замовити послугу'
  return (
    <div className={`${css.services} ${sharedCss.container}`}>
    <h2>Наші послуги</h2>

    <ServicesList services={serivcesObj}/>
   <OrangeButton label={buttonLabel}/>
  
  </div>

  )
}
