import { nanoid } from 'nanoid'
import React from 'react'
import css from '../Footer/footer.module.css'
export default function FooterMenuListItems({listItems}) {
  return (
    <>
     {listItems.map(item => (
        <li key={nanoid()} className={css.footerMenuListItem}>
          <p className={css.footerMenuText}
           
            onClick={item.clickHandler}>
            
          
            {item.text}
            </p>
          {/* <Link to={item.link}>{item.text}</Link> */}
        </li>
      ))}
    </>
  )
}
