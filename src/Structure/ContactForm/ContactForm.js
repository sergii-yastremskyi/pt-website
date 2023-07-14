import React, { useState } from 'react';
import css from './contactForm.module.css';
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
import useIsDesktop from '../../hooks/useIsDesktop';
import SoicialIcons from '../SocialIcons/SoicialIcons';
import { useScrollTo } from '../../hooks/useScrollTo';
init('Sq_qfhahOeMrA9sH1');
export default function ContactForm() {
  const contacts = [{ text: '+38 067 994 4144' }];
  const [modal, setModal] = useState(false);

  const elemId = 'contacts';

  useScrollTo(elemId);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [contactNumber, setContactNumber] = useState('000000');
  const generateContactNumber = () => {
    const numStr = '000000' + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };
  const onSubmit = data => {
    generateContactNumber();

    setModal(true);
    console.log(modal);
    setTimeout(() => setModal(false), 3000);
    console.log(modal);

    reset();
    sendForm('service_5h0tosq', 'template_ze0t61w', '#contact-form').then(
      function (response) {
        // console.log('SUCCESS!', response.status, response.text);
      },
      function (error) {
        // console.log('FAILED...', error);
      }
    );
  };
  return (
    <div className={css.contacts} id={elemId}>
      <h2 className={css.contactsHeader}>Контакти</h2>
      <div className={css.contactsWrapper}>
        <div className={css.contactInfo}>
          <ul className={css.contactInfoList}>
            <li className={css.contactInfoListItem}>
              {useIsDesktop() ? (
                <p className={css.contactInfoContent}>+38 067 994 4144</p>
              ) : (
                <a href="tel:+380679944144">+38 067 994 4144</a>
              )}
            </li>
            <li className={css.contactInfoListItem}>
              {' '}
              <p>
                <a href="mailto:info@partytools.com.ua">
                  info@partytools.com.ua
                </a>
              </p>
            </li>
          </ul>
          <SoicialIcons />
        </div>
        <div className={css.contactForm}>
          {modal && <div className={css.modal}>Ваше заявка прийнята!</div>}
          <p className={css.contactFormText}>
            Зв'яжіться з нами або залиште заявку на зворотний дзвінок і наш
            менеджер зв'яжеться з вами!
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            id="contact-form"
            className={css.contactFormForm}
          >
            {/* {console.log('window location...', window.location.href)} */}
            <input type="hidden" name="contact_number" value={contactNumber} />
            <input type="hidden" name="webpage" value={window.location.href} />
            <input
              {...register('email')}
              placeholder="E-mail"
              className={css.contactFormInput}
              // type="email"
            />
            <input
              {...register('name', { required: 'Заповніть обов`язково' })}
              placeholder="Ім'я"
              className={css.contactFormInput}
              type="text"
            />
            {/* {console.log('errors', errors)} */}
            {errors.name?.message && (
              <p className={css.errorMsg}>{errors.name?.message}</p>
            )}
            <input
              {...register('phone', {
                required: 'Заповніть обов`язково',
                minlength: 5,
              })}
              placeholder="Телефон"
              className={css.contactFormInput}
              type="phone"
            />
            {errors.phone?.message && (
              <p className={css.errorMsg}>{errors.phone?.message}</p>
            )}
            <button className={css.contactFormButton} type="submit">
              Надіслати
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
