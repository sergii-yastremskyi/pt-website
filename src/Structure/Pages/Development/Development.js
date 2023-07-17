import React from 'react';
import css from './development.module.css';
export default function Development() {
  return (
    <div className={css.container}>
      <p className={css.message}>
        Вибачте, ця сторінка на разі в розробці. <br /> Звернітся до наших
        менеджерів.
      </p>
      <a className={css.phone} href="tel:+380679944144">
        +38 067 994 4144
      </a>
    </div>
  );
}
