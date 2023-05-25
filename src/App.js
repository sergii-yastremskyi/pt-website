import './App.css';
import Header from './Structure/Header';
import logoWhite from './Assets/img/party_tools_logo_white.png';
import css from './mainApp.module.css';

import { Route, Routes } from 'react-router-dom';
import Home from './Structure/Pages/Home';

function App() {
  return (
    <div className={css.app}>
      <Header />
      <div className={css.content}></div>
      <div className="callback-form"></div>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/*FOOOOOOTEEEEEEEEER  */}
      <div className={css.footer}>
        <img className={css.logoWhite} alt="logo" src={logoWhite}></img>
        <div className={css.footerMenu}>
          <p className={css.footerMenuHeader}>МЕНЮ</p>
          <ul className={css.footerMenuList}>
            <li className={css.footerMenuListItem}>
              <p className={css.footerMenuItem}>Послуги</p>
            </li>
            <li className={css.footerMenuListItem}>
              <p className={css.footerMenuItem}>Про нас</p>
            </li>

            <li className={css.footerMenuListItem}>
              <p className={css.footerMenuItem}>Контакти</p>
            </li>
          </ul>
        </div>
        <div className={css.footerServices}>
          <p className={css.footerServicesHeader}>ПОСЛУГИ</p>
          <ul className={css.footerServicesList}>
            <li className={css.footerServicesListItem}>
              <p className={css.footerServicesItem}>Photobooth</p>
            </li>
            <li className={css.footerServicesListItem}>
              <p className={css.footerServicesItem}>Photobooth with Chomakey</p>
            </li>

            <li className={css.footerServicesListItem}>
              <p className={css.footerServicesItem}>Selfie Mirror</p>
            </li>
            <li className={css.footerServicesListItem}>
              <p className={css.footerServicesItem}>Wi-Fi Print</p>
            </li>
            <li className={css.footerServicesListItem}>
              <p className={css.footerServicesItem}>GIF Booth</p>
            </li>
            <li className={css.footerServicesListItem}>
              <p className={css.footerServicesItem}>Instant Print</p>
            </li>
            <li className={css.footerServicesListItem}>
              <p className={css.footerServicesItem}>High Selfie</p>
            </li>
            <li className={css.footerServicesListItem}>
              <p className={css.footerServicesItem}>Sharig Station</p>
            </li>
          </ul>
        </div>
        <div className={css.footerContacts}>
          <a href="tel:+380679944144" className={css.footerContactsItem}>
            {' '}
            +38 (067) 994-4144
          </a>
          <p className={css.footerContactsItem}> info@partytools.com.ua</p>
        </div>
      </div>
    </div>
  );
}

export default App;
