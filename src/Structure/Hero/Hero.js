import React from 'react';
import css from './hero.module.css';
export default function Hero() {
  return (
    <div className={css.hero}>
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
