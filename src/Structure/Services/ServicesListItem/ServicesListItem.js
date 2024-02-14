import React from 'react';
import { nanoid } from 'nanoid';
import css from '../../Services/services.module.css';
import { useNavigate } from 'react-router-dom';
export default function ServicesListItem({ services }) {
  const navigate = useNavigate();
  return (
    <>
      {services.map(item => (
        <li
          key={nanoid()}
          onClick={() => navigate(item.link)}
          className={css.servicesListItem}
        >
          <img className={css.servicesImg} src={item.thumbImg} alt="" />
          <p className={css.servicesHeader}> {item.name}</p>
          <p className={css.servicesDescrioption}>{item.description}</p>
        </li>
      ))}
    </>
  );
}
