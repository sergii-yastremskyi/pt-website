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
import brandingImg1 from '../../../Assets/img/photoBoothBranding1.png';
import brandingImg2 from '../../../Assets/img/photoBoothBranding2.png';
import brandingImg3 from '../../../Assets/img/photoBoothBranding3.png';
import PhotoBoothBrandingListItem from './PhotoBoothBrandingListItem';
import PricePackageListItem from './pricePackageListItem';
import PossibilitiesListItem from './PossibilitiesListItem';
import number1 from '../../../Assets/img/number1.png';
import number2 from '../../../Assets/img/number2.png';
import number3 from '../../../Assets/img/number3.png';
import number4 from '../../../Assets/img/number4.png';
import useIsDesktop from '../../../hooks/useIsDesktop';
export default function PhotoBooth() {
  const desktop = useIsDesktop();
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
  const brandingContent = [
    { img: brandingImg1, desc: 'Брендинг задньої панелі', price: '1500' },
    { img: brandingImg2, desc: 'Брендинг передньої панелі', price: '1500 грн' },
    { img: brandingImg3, desc: 'Повний брендинг фотобудки', price: '2500 грн' },
  ];
  const pricePackageContent = [
    {
      title: 'Мінімальний',
      desc: [
        '3 години роботи',
        'Доставка в межах Києва',
        'Безлімітний друк',
        'Аксесуари для фото',
        'Брендинг фото',
        'Робота персоналу',
      ],
      price: '12000 грн',
    },
    {
      title: 'Оптимальний',
      desc: [
        '4 години роботи',
        'Доставка в межах Києва',
        'Безлімітний друк',
        'Аксесуари для фото',
        'Брендинг фото',
        'Робота персоналу',
      ],
      price: '16000 грн',
    },
    {
      title: 'Преміум',
      desc: [
        '4 години роботи',
        'Доставка в межах Києва',
        'Безлімітний друк',
        'Аксесуари для фото',
        'Брендинг фото',
        'Робота персоналу',
        'Хостес',
        'Шерінг станція',
      ],
      price: '18000 грн',
    },
  ];
  const possibilitiesContent = [
    {
      bulletPoint: number1,
      tittle: 'Надсилайте',
      desc: 'Миттєво відправляйте фото в соціальні мережі, на пошту або SMS з посиланням на фото, використовуючи Sharing Station.',
    },
    {
      bulletPoint: number2,
      tittle: 'Налаштовуйте',
      desc: 'З великою кількістю налаштувань ви обов`язково знайдете те що треба. Розмістіть ваш бренд на фотобудку, знімок і фон.',
    },
    {
      bulletPoint: number3,
      tittle: 'Зберігайте',
      desc: 'Забирайте з собою емоції та спогади. Наше обладнання дозволить',
    },
    {
      bulletPoint: number4,
      tittle: 'Реквізит',
      desc: 'Наш реквезіт зацікавить і додасть атмосфери на фото. ',
    },
  ];
  const contactsHandlerClick = useClickHandler({ name: 'contacts' });
  return (
    <div id="photobooth" className={`${css.photobooth} ${css.itemContainer}`}>
      <div className={css.productHero}>
        <div className={css.heroWrapper}>
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
          {!desktop && (
            <OrangeButton
              onPress={contactsHandlerClick}
              label="Замовити послугу"
            />
          )}
        </div>
        {desktop && (
          <OrangeButton
            onPress={contactsHandlerClick}
            label="Замовити послугу"
          />
        )}
      </div>

      <div className={css.photoSection}>
        <div className={css.photoSectionWrapper}>
          <h2 className={css.photoSectionHeader}>Фото</h2>
          <ul className={css.photoList}>
            <PhotoListItem list={photoListContent} />
          </ul>
        </div>
        <img
          className={css.photoboothSampleImg}
          src={photoBoothSample}
          alt="Фотобудка"
        />
      </div>
      <div className={`${css.branding} ${css.container}`}>
        <h2 className={css.brandingHeader}>Брендинг</h2>
        <p className={css.brandingDesc}>
          Одна з додаткових опцій — брендування фотобудки. <br />
          Це може бути логотип, #хештег заходу, або цільове послання{' '}
        </p>
        <ul className={css.brandingList}>
          <PhotoBoothBrandingListItem content={brandingContent} />
        </ul>
      </div>
      <div className={`${css.pricePackage} ${css.container}`}>
        <h2 className={css.pricePackageHeader}>Пакети послуг</h2>
        <ul className={css.pricePackageList}>
          <PricePackageListItem content={pricePackageContent} />
        </ul>
      </div>
      <div className={`${css.possibilities} ${css.container}`}>
        <h2 className={css.possibilitiesTitle}>Можливості</h2>
        <ul className={css.possibilitiesList}>
          <PossibilitiesListItem content={possibilitiesContent} />
        </ul>
      </div>
      <ContactForm />
    </div>
  );
}
