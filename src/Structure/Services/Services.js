import React from 'react';
import css from './services.module.css';
import sharedCss from '../Shared/shared.module.css';
import ServicesList from './ServicesList';
import OrangeButton from '../OrangeButton';
import photobooth from '../../Assets/img/photobooth.png';
import chromakey from '../../Assets/img/chromakey.png';
import selfieMirror from '../../Assets/img/selfieMiirror.png';
import wifiPrint from '../../Assets/img/wifiPrint.png';
import gifBooth from '../../Assets/img/gifBooth_big.png';
import instaPrint from '../../Assets/img/instantPrint.png';
import highSelfie from '../../Assets/img/highSelfie.png';
import sharingStation from '../../Assets/img/sharingStation.png';
import { useScrollTo } from '../WhereToUse/useScrollTo';
import { useNavigate } from 'react-router-dom';

export default function Services() {
  const elemId = 'services';
  useScrollTo(elemId);

  const serivcesObj = [
    {
      name: 'Photobooth',
      link: '',
      thumbImg: photobooth,
      description:
        'Лише декілька хвилин і яскраві спогади залишаться з вами у вигляді роздрукованого фото',
    },
    {
      name: 'Photobooth with Chromakey',
      link: '',
      thumbImg: chromakey,
      description: 'Дозволяє вибирати будь-яке зображення на фон',
    },
    {
      name: 'Selfie Mirror',
      link: '',
      thumbImg: selfieMirror,
      description:
        'Яскраві анімації та голосовий супровід допоможуть зробити ідеальне селфі',
    },
    {
      name: 'Wi-Fi Print',
      link: '',
      thumbImg: wifiPrint,
      description:
        'Допоможе легко та швидко розширити фотозону до масштабу заходу',
    },
    {
      name: 'Gif Booth',
      link: '',
      thumbImg: gifBooth,
      description:
        'Відмінний контент для Facebook, Instagram лише за декілька секунд за #хештегом',
    },
    {
      name: 'Instant Print',
      link: '',
      thumbImg: instaPrint,
      description: 'Друк фотографій з Instagram',
    },
    {
      name: 'High Selfie',
      link: '',
      thumbImg: highSelfie,
      description: 'Для випадків, коли звичний ракурс занадто банально',
    },
    {
      name: 'Sharing Station',
      link: '',
      thumbImg: sharingStation,
      description: 'Надсилайте фото на пошту або телефон',
    },
  ];

  const buttonLabel = 'Замовити послугу';
  return (
    <div id={elemId} className={`${css.services} ${sharedCss.container}`}>
      <h2>Наші послуги</h2>

      <ServicesList services={serivcesObj} />
      <OrangeButton label={buttonLabel} />
    </div>
  );
}
