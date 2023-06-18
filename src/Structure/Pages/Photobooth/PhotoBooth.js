import React from 'react';
import css from '../productPageCss.module.css';
import PhotoBoothDescList from './PhotoBoothDescList';
import photoBoothHeroImg from '../../../Assets/img/photoBoothHEroImg.png';
import OrangeButton from '../../OrangeButton/OrangeButton';
export default function PhotoBooth() {
  const heroDescContent = [
    'Гарантія відмінного настрою',
    'Необмежений друк фотографій',
    'Емоції які можна взяти з собою',
  ];
  return (
    <div className={css.photobooth}>
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
      </div>
      <OrangeButton
        onPress={() => console.log('тиць')}
        label="Замовити послугу"
      />
    </div>
  );
}
