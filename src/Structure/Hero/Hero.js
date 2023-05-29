import React from 'react';
import css from './hero.module.css';
import arrowPic from '../../Assets/img/ServiceBtnArrow.png';
import useClickHandler from '../../hooks/useClickHandler';
export default function Hero() {
  const servicesClickHandler = useClickHandler({ name: 'services' });
  const btnTest = () => {
    console.log('tesssttttt');
  };

  return (
    <div className={css.heroWraper}>
      <button
        className={`${css.heroServiceBtn} ${css.fadeButton}`}
        type="button"
        onClick={servicesClickHandler}
      >
        <img src={arrowPic} alt="Button Image" className={css.serviceBtnImg} />
      </button>
      <div className={css.hero}>
        <div className={css.heroInsidecontainer}>
          <div className={css.gradient}></div>
          <h2 className={css.heroHeader}>
            Оренда фотобудок і гарного настрою!
          </h2>
          <p className={css.heroContent}>
            фотобудка - відмінне доповнення до будь-якого заходу. Ваші гості
            можуть миттєво отримати роздруковане фото та поілитися ним в
            соціалних мережах.
          </p>
        </div>
      </div>
    </div>
  );
}
