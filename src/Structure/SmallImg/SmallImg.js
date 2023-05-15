import React from 'react'
import css from './smallImg.module.css'
import img1 from '../../Assets/img/SmallImg1.jpg'
import img2 from '../../Assets/img/SmallImg2.jpg'
import img3 from '../../Assets/img/SmallImg3.jpg'
import img4 from '../../Assets/img/SmallImg4.jpg'
import img5 from '../../Assets/img/SmallImg5.jpg'
import img6 from '../../Assets/img/SmallImg6.jpg'
import img7 from '../../Assets/img/SmallImg7.jpg'
import img8 from '../../Assets/img/SmallImg8.jpg'
import SmallImgsListItem from './SmallImgsListItem/SmallImgsListItem'
export default function SmallImg() {
    const imgs = [{img:img1},{img:img2},{img:img3},{img:img4},{img:img5},{img:img6},{img:img7},{img:img8}];
  return (
    <div className={css.smallImg}>
        <ul className={css.smallImgList}>
            <SmallImgsListItem content={imgs}/>
        </ul>        
    </div>
  )
}
