import React from 'react'
import css from "./footer.module.css"
import logoWhite from '../../Assets/img/party_tools_logo_white.png';
import useClickHandler from '../../hooks/useClickHandler';
import FooterMenuListItems from './FooterMenuListItems';
import FooterServicesListItems from './FooterServicesListItems';
export default function Footer() {
const logoClickHandler = useClickHandler({name: 'Header'})  

const servicesHandlerClick = useClickHandler({ name: 'services' });
const aboutHandlerClick = useClickHandler({ name: 'about' });
const galleryHandlerClick = useClickHandler({ name: 'gallery' });

const FooterServiceMenu = [
  { text: 'ПОСЛУГИ', link: '', clickHandler: servicesHandlerClick },
  { text: 'ПРО НАС', link: '', clickHandler: aboutHandlerClick },
  { text: 'ГАЛЕРЕЯ', link: '', clickHandler: galleryHandlerClick },
];
const serivcesObj = [
  {
    name: 'Photobooth',
    link: '/photo-booth',
  },
  {
    name: 'Photobooth with Chromakey',
    link: '/chromakey'
  },
  {
    name: 'Selfie Mirror',
    link: '/selfie-mirror',
  },
  {
    name: 'Wi-Fi Print',
    link: '/wifi-print',
  },
  {
    name: 'Gif Booth',
    link: '/gif-booth',
  },
  {
    name: 'Instant Print',
    link: '/instant-print',
  },
  {
    name: 'High Selfie',
    link: '/high-selfie',
  },
  {
    name: 'Sharing Station',
    link: ''
  },
];




  return (
      <div className={css.footerContainer}>
       <div className={css.footer}>
     
        <img className={css.logoWhite}
        alt="logo" src={logoWhite}
         onClick={logoClickHandler}></img>
        <div className={css.footerMenu}>
          
          <p className={css.footerMenuHeader}>МЕНЮ</p>
          <ul className={css.footerMenuList}>
           <FooterMenuListItems listItems={FooterServiceMenu}/>
          </ul>
        </div>
        <div className={css.footerServices}>
          <p className={css.footerServicesHeader}>ПОСЛУГИ</p>
          <ul className={css.footerServicesList}>
            <FooterServicesListItems services={serivcesObj} />
          </ul>
        </div>
        <div className={css.footerContacts}>
          <a href="tel:+380679944144" className={css.footerContactsItem}>
            {' '}
            +38 (067) 994-4144
          </a>
          <a href='mailto:info@partytools.com.ua'className={css.footerContactsItem}> info@partytools.com.ua</a>
        </div>
        </div>
        </div>
      
  )
}
