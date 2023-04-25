import './App.css';
import Header from './Structure/Header';
import logoWhite from './Assets/img/party_tools_logo_white.png';
import css from './mainApp.module.css';
import number1 from './Assets/img/number1.png';
import Hero from './Structure/Hero';
import Services from './Structure/Services';
import WhereToUse from './Structure/WhereToUse';
import HowItWorks from './Structure/HowItWorks'
import WhyWe from './Structure/WhyWe'
import WhatYouGet from './Structure/WhatYouGet'
function App() {
  return (
    <div className="App">
      <Header />
      <div className={css.content}>
        <Hero/>
        <Services/>
        <WhereToUse/>
        <HowItWorks/>
        <WhyWe/>
        <WhatYouGet/>
        <div className={css.clients}>
          <p className={css.clientsHeader}>Наші клієнти</p>
          <ul className={css.clientsList}>
            <li className={css.clientsListItem}>
              <img
                src="https://picsum.photos/160/90"
                alt="Girl in a jacket"
                width="160"
                height="123"
              />
            </li>
            <li className={css.clientsListItem}>
              <img
                src="https://picsum.photos/160/90"
                alt="Girl in a jacket"
                width="160"
                height="123"
              />
            </li>
            <li className={css.clientsListItem}>
              <img
                src="https://picsum.photos/160/90"
                alt="Girl in a jacket"
                width="160"
                height="123"
              />
            </li>
            <li className={css.clientsListItem}>
              <img
                src="https://picsum.photos/160/90"
                alt="Girl in a jacket"
                width="160"
                height="123"
              />
            </li>
            <li className={css.clientsListItem}>
              <img
                src="https://picsum.photos/160/90"
                alt="Girl in a jacket"
                width="160"
                height="123"
              />
            </li>
            <li className={css.clientsListItem}>
              <img
                src="https://picsum.photos/160/90"
                alt="Girl in a jacket"
                width="160"
                height="123"
              />
            </li>
            <li className={css.clientsListItem}>
              <img
                src="https://picsum.photos/160/90"
                alt="Girl in a jacket"
                width="160"
                height="123"
              />
            </li>
            <li className={css.clientsListItem}>
              <img
                src="https://picsum.photos/160/90"
                alt="Girl in a jacket"
                width="160"
                height="123"
              />
            </li>
          </ul>
        </div>
        <div className={css.contacts}>
          <p>Контакти</p>
          <div className={css.contactForm}>
            <p className={css.contactFormText}>
              Зв'яжіться з нами або залиште заявку на зворотний дзвінок і наш
              менеджер зв'яжеться з вами!
            </p>
            <form className={css.contactFormForm}>
              <input
                placeholder="E-mail"
                className={css.contactFormInput}
                type="email"
              />
              <input
                placeholder="Ім'я"
                className={css.contactFormInput}
                type="text"
              />
              <input
                placeholder="Телефон"
                className={css.contactFormInput}
                type="phone"
              />
              <button className={css.contactFormButton} type="button">
                Надіслати
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="callback-form"></div>
      
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
