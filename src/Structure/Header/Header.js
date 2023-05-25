import React, { useState } from 'react';
import css from './header.module.css';
import logo from '../../Assets/img/party_tools_logo.png';
import ServicesLitsItems from './ServicesListItems/ServicesLitsItems';
import SoicialIcons from '../SocialIcons/';
import useIsDesktop from '../../hooks/useIsDesktop';
import sharedCss from '../Shared/shared.module.css';

export default function Header() {
  const headerMenu = [
    { text: 'ПОСЛУГИ', link: '/#services' },
    { text: 'ПРО НАС', link: '' },
    { text: 'ГАЛЕРЕЯ', link: '' },
  ];

  const desktop = useIsDesktop();
  console.log('desktop', desktop);
  let [animate, setAnimate] = useState(false);
  const dropMenuAnimator = () => {
    setAnimate(!animate);
  };

  const handleClick = () => {
    window.location.href = '/#contacts';
  };

  return (
    <header className={css.header}>
      {!desktop && (
        <div className={css.burgerBar}>
          <div
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
            <div className={(css.logoConteiner, css.item)}>
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
              onClick={handleClick}
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
          <div className={`${css.logoConteiner} ${css.item}`}>
            <img className={css.logo} alt="logo" src={logo}></img>
          </div>
          <div className={css.leftWrapper}>
            {' '}
            <SoicialIcons style={(css.icons, css.item)} />
          </div>

          <div className={css.item}>
            <div className={css.rightHeaderGroup}>
              <button
                onClick={handleClick}
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
