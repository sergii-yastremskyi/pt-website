import React from 'react';
import css from '../productPageCss.module.css';
import OrangeButton from '../../OrangeButton/OrangeButton';
import OrangeButtonShort from '../../OrangeButtonShort/OrangeButtonShort';
export default function PricePackageListItem({ content }) {
  const scroll = () => {
    const elem = document.getElementById('contacts');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      {content.map(item => (
        <li className={css.pricePackageCard}>
          <h3 css={css.pricePackageTitle}>{item.title}</h3>
          <p className={css.pricePackagePrice}>{item.price}</p>
          <ul className={css.pricePackegeDescList}>
            {item.desc.map(item => (
              <li className={css.pricePackegeDescListItem}>{item}</li>
            ))}
          </ul>
          <OrangeButtonShort label="Замовити" onPress={scroll} />
        </li>
      ))}
    </>
  );
}
