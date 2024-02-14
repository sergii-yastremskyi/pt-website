import { nanoid } from 'nanoid'
import React from 'react'
import css from '../Footer/footer.module.css'
import { useNavigate } from 'react-router-dom'
export default function FooterServicesListItems({services}) {
  const navigate = useNavigate();
  return (
    
 <>
      {services.map(item => (
        <li
          key={nanoid()}
          onClick={() => navigate(item.link)}
          className={css.footerServicesListItem}
        >
        
          <p className={css.FooterServicesText}> {item.name}</p>
        
        </li>
      ))}
    </>
    
  )
}
