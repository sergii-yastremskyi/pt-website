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
import { useScrollTo } from '../../hooks/useScrollTo';
import { useNavigate } from 'react-router-dom';
import useScrollToPages from '../../hooks/useScrollToPages';

export default function Services() {
  const elemId = 'services';
  useScrollTo(elemId);

  const serivcesObj = [
    {
      name: 'Photobooth',
      link: '/photo-booth',
      thumbImg: photobooth,
      description:
        'Лише декілька хвилин і яскраві спогади залишаться з вами у вигляді роздрукованого фото',
    },
    {
      name: 'Photobooth with Chromakey',
      link: '/chromakey',
      thumbImg: chromakey,
      description: 'Дозволяє вибирати будь-яке зображення на фон',
    },
    {
      name: 'Selfie Mirror',
      link: '/selfie-mirror',
      thumbImg: selfieMirror,
      description:
        'Яскраві анімації та голосовий супровід допоможуть зробити ідеальне селфі',
    },
    {
      name: 'Wi-Fi Print',
      link: '/wifi-print',
      thumbImg: wifiPrint,
      description:
        'Допоможе легко та швидко розширити фотозону до масштабу заходу',
    },
    {
      name: 'Gif Booth',
      link: '/gif-booth',
      thumbImg: gifBooth,
      description:
        'Відмінний контент для Facebook, Instagram лише за декілька секунд за #хештегом',
    },
    {
      name: 'Instant Print',
      link: '/instant-print',
      thumbImg: instaPrint,
      description: 'Друк фотографій з Instagram',
    },
    {
      name: 'High Selfie',
      link: '/high-selfie',
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
  const scroll = () => {
    const elem = document.getElementById('contacts');
    elem.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div id={elemId} className={`${css.services} ${sharedCss.container}`}>
      <h2>Наші послуги</h2>

      <ServicesList services={serivcesObj} />
      <OrangeButton onPress={scroll} label={buttonLabel} />
    </div>
  );
}
