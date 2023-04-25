import React from 'react'
import css from './whatYouGet.module.css'
import number1 from '../../Assets/img/number1.png'
import number2 from '../../Assets/img/number2.png'
import number3 from '../../Assets/img/number3.png'
import number4 from '../../Assets/img/number4.png'
import number5 from '../../Assets/img/number5.png'
import number6 from '../../Assets/img/number6.png'


export default function WhatYouGet() {
const whatYouGetContent=[{img:number1,header:'',text:''}]
  return (
   <>  <div className={css.whatYouGet}>
    
   <h2 className={css.whatYouGetHeader}>Обираючи нас ви отримуєте</h2>
   <ul className={css.whatYouGetList}>
     <li className={css.whatYouGetListItem}>
       <img alt='' src={whatYouGetContent[0].img} className={css.whatYouGetIm}/>
       <p className={css.whatYouGetItemBold}>Якісне обладнання</p>
       <p className={css.whatYouGetItemText}>
         Професійні дзеркальні камери та студійне світло забезпечать
       </p>
     </li>
     
   </ul>
 </div> </>
  )
}
