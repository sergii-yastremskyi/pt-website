import React from 'react';
import css from './whatYouGet.module.css';
import number1 from '../../Assets/img/number1.png';
import number2 from '../../Assets/img/number2.png';
import number3 from '../../Assets/img/number3.png';
import number4 from '../../Assets/img/number4.png';
import number5 from '../../Assets/img/number5.png';
import number6 from '../../Assets/img/number6.png';
import WhatYouGetListItem from './WhatYouGetListItem';
import { useScrollTo } from '../../hooks/useScrollTo';

const elemId = 'about';
export default function WhatYouGet() {
  useScrollTo(elemId);
  const whatYouGetContent = [
    {
      img: number1,
      header: 'Якісне обладнання',
      text: 'Професійні дзеркальні камери та студійне світло забезпечать',
    },
    {
      img: number2,
      header: 'Студійне світло',
      text: 'Використовуючи професійне світло ми отримуємо м`яке освітлення в будь-яких умовах',
    },
    {
      img: number3,
      header: 'Індивідуальний підхід',
      text: 'Велика кількість різноманітних послуг та опцій вирішують будь-яке завдання',
    },
    {
      img: number4,
      header: 'Професійна команда',
      text: 'Наш досвід дозволяє організувати захід на найвищому рівні',
    },
    {
      img: number5,
      header: 'Ніяких запізнень',
      text: 'Приїжджаємо заздалегідь та зберігаємо ваш спокій',
    },
    {
      img: number6,
      header: 'Зручна оплата',
      text: 'Працюємо з готівковим і безготівковим розрахунком',
    },
  ];

  return (
    <>
      {' '}
      <div id={elemId} className={css.whatYouGet}>
        <h2 className={css.whatYouGetHeader}>Обираючи нас ви отримуєте</h2>
        <ul className={css.whatYouGetList}>
          <WhatYouGetListItem content={whatYouGetContent} />
        </ul>
      </div>{' '}
    </>
  );
}
