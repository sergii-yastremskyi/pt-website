import React from 'react';
import css from '../productPageCss.module.css';
import PhotoBoothDescList from './PhotoBoothDescList';
import photoBoothHeroImg from '../../../Assets/img/photoBoothHEroImg.png';
import OrangeButton from '../../OrangeButton/OrangeButton';
import ContactForm from '../../ContactForm';
import { useEffect } from 'react';
import useScrollToPages from '../../../hooks/useScrollToPages';
import useClickHandler from '../../../hooks/useClickHandler';
import PhotoListItem from './PhotoListItem';
import photoBoothSample from '../../../Assets/img/PhotoBoothSample.jpg';
export default function PhotoBooth() {
  useScrollToPages('photobooth');
  const heroDescContent = [
    'Гарантія відмінного настрою',
    'Необмежений друк фотографій',
    'Емоції які можна взяти з собою',
  ];
  const photoListContent = [
    'Фотографія брендується та оформлюється під стилістику заходу',
    'Розміри фото 10х15 см, 5х15 см (смужки), 15х21 см (великий формат фотографій, замовляється окремо)',
    'Створення колажу з декількох фотографій, розміщуючи їх на одному знімку',
  ];
  const contactsHandlerClick = useClickHandler({ name: 'contacts' });
  return (
    <div id="photobooth" className={css.photobooth}>
      <div className={css.productHero}>
        <div className={css.productImage}>
          <img
            className={css.photoBoothHeroImg}
            alt="Photobooth"
            src={photoBoothHeroImg}
          />
        </div>
        <div className={css.productiNfo}>
          <h2>Фотобудка від Party Tools це:</h2>
          <ul className={css.heroDescList}>
            <PhotoBoothDescList content={heroDescContent} />
          </ul>
        </div>
        <OrangeButton onPress={contactsHandlerClick} label="Замовити послугу" />
      </div>
      <div className={css.photoSection}>
        <h2 className={css.photoSectionHeader}>Фото</h2>
        <ul className={css.photoList}>
          <PhotoListItem list={photoListContent} />
        </ul>
        <img
          className={css.photoboothSampleImg}
          src={photoBoothSample}
          alt="Фотобудка"
        />
      </div>
      <ContactForm />
    </div>
  );
}
