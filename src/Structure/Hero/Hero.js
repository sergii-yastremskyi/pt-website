import React from 'react';
import css from './hero.module.css';
import useClickHandler from '../../hooks/useClickHandler';
export default function Hero() {
  const servicesClickHandler = useClickHandler({ name: 'services' });
  const btnTest = () => {
    console.log('tesssttttt');
  };

  const btnTester = () => {
    console.log('testtttt');
  };
  return (
    <div className={css.hero}>
      <button className={css.heroServiceBtn} type="button" onClick={btnTester}>
        test
      </button>
      <button type="button" onClick={btnTest}>
        sss
      </button>
      <div className={css.heroInsidecontainer}>
        <div className={css.gradient}></div>
        <h2 className={css.heroHeader}>Оренда фотобудок і гарного настрою!</h2>
        <p className={css.heroContent}>
          фотобудка - відмінне доповнення до будь-якого заходу. Ваші гості
          можуть миттєво отримати роздруковане фото та поілитися ним в соціалних
          мережах.
        </p>
      </div>
    </div>
  );
}
