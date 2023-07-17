import React, { useState } from 'react';
import css from './header.module.css';
import logo from '../../Assets/img/party_tools_logo.png';
import ServicesLitsItems from './ServicesListItems/ServicesLitsItems';
import SoicialIcons from '../SocialIcons/';
import useIsDesktop from '../../hooks/useIsDesktop';
import sharedCss from '../Shared/shared.module.css';
import { useNavigate } from 'react-router-dom';
import useClickHandler from '../../hooks/useClickHandler';
export default function Header() {
  const desktop = useIsDesktop();
  const navigate = useNavigate();
  // console.log('desktop', desktop);
  let [animate, setAnimate] = useState(false);
  const dropMenuAnimator = () => {
    setAnimate(!animate);
  };
  // const navigate = useNavigate();
  // const handleClick = e => {
  //   // useClickHandler(e);
  //   const name = e.target.name;
  //   const elem = document.getElementById(name);
  //   if (!elem) {
  //     navigate({ pathname: '/', search: '?scroll=contacts' });
  //   } else {
  //     elem.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };
  const contactsHandlerClick = useClickHandler({ name: 'contacts' });
  const servicesHandlerClick = useClickHandler({ name: 'services' });
  const aboutHandlerClick = useClickHandler({ name: 'about' });
  const galleryHandlerClick = useClickHandler({ name: 'gallery' });

  const headerMenu = [
    { text: 'ПОСЛУГИ', link: '', clickHandler: servicesHandlerClick },
    { text: 'ПРО НАС', link: '', clickHandler: aboutHandlerClick },
    { text: 'ГАЛЕРЕЯ', link: '', clickHandler: galleryHandlerClick },
  ];

  return (
    <header className={css.header}>
      {!desktop && (
        <div className={css.burgerBar}>
          <div
            id="menu"
            onClick={dropMenuAnimator}
            className={`${css.menuBtn} ${animate && css.open}`}
          >
            <div className={css.menuBtnBurger}></div>
          </div>
        </div>
      )}
      {!desktop ? (
        <div
          className={`${css.dropMenu} 
        ${animate && css.dropAnimation} ${desktop && css.menuIsOpen}`}
        >
          <div className={css.menuMobileContainer}>
            <div
              onClick={() => navigate('/')}
              className={(css.logoConteiner, css.item)}
            >
              <img className={css.logo} alt="logo" src={logo}></img>
            </div>

            <div className={css.services}>
              <ul className={css.servisecList}>
                <ServicesLitsItems
                  style={css.servicesItemStyle}
                  listItems={headerMenu}
                />
              </ul>
            </div>

            <SoicialIcons style={(css.icons, css.item)} />

            <button
              name="contacts"
              onClick={contactsHandlerClick}
              type="button"
              className={`${css.buttonContacts} ${css.item}`}
            >
              Контакти
            </button>
            <ul className={`${css.languageSeletor} ${css.item}`}>
              <li className={css.languageSeletorListItem}>UA</li>
              <li className={css.languageSeletorListItem}>ENG</li>
            </ul>
          </div>
        </div>
      ) : (
        <div
          className={`${css.dropMenu} ${sharedCss.container}
        ${animate && css.dropAnimation} ${desktop && css.menuIsOpen}`}
        >
          <div
            onClick={() => navigate('/')}
            className={`${css.logoConteiner} ${css.item}`}
          >
            <img className={css.logo} alt="logo" src={logo}></img>
          </div>
          <div className={css.leftWrapper}>
            {' '}
            <SoicialIcons style={(css.icons, css.item)} />
          </div>

          <div className={css.item}>
            <div className={css.rightHeaderGroup}>
              <button
                name="contacts"
                onClick={contactsHandlerClick}
                type="button"
                className={css.buttonContacts}
              >
                Контакти
              </button>
              <ul className={css.languageSeletorList}>
                <li className={css.languageSeletorListItem}>UA</li>
                <li className={css.languageSeletorListItem}>ENG</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {desktop && <div className={css.breakLine}></div>}

      {desktop && (
        <div className={css.services}>
          <ul className={css.servisecList}>
            <ServicesLitsItems
              style={css.servicesItemStyle}
              listItems={headerMenu}
            />
          </ul>
        </div>
      )}
    </header>
  );
}
