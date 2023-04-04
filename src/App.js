import './App.css';
import Header from './Structure/Header';
import logoWhite from './Assets/img/party_tools_logo_white.png';
import css from './mainApp.module.css';
import whereToUseImg from './Assets/img/where_to_use.jpg';
import number1 from './Assets/img/number1.png';
function App() {
  return (
    <div className="App">
      <Header />

      <div className="content">
        <div className={css.hero}>
          <h2 className={css.heroHeader}>
            Оренда фотобудок і гарного настрою!
          </h2>
          <p className={css.heroContent}>
            фотобудка - відмінне доповнення до будь-якого заходу. Ваші гості
            можуть миттєво отримати роздруковане фото та поілитися ним в
            соціалних мережах.
          </p>
        </div>
        <div className={css.services}>
          <h2>Наші послуги</h2>
          <ul className={css.serviceList}>
            <li className={css.serviceListItem}>
              <img src="https://via.placeholder.com/200" alt="Фотобудка"></img>
              <h3>Фотобудка</h3>
              <p>
                Лише декілька хвилин і яскраві спогади залишаться з вами у
                вигляді роздрукованого фото
              </p>
            </li>
          </ul>
          <button type="button" className={css.orderButton}>
            Замовити послгу
          </button>
        </div>
        <div className={css.whereToUse}>
          <h2 className={css.whereToUseHeader}>Де можна використати:</h2>
          <ul className={css.whereToUseList}>
            <li className={css.whereToUseListItem}>Виставки</li>
            <li className={css.whereToUseListItem}>Корпоративні заходи</li>
            <li className={css.whereToUseListItem}>Вечріки</li>
            <li className={css.whereToUseListItem}>Спортивні події</li>
            <li className={css.whereToUseListItem}>Весілля та річниці</li>
            <li className={css.whereToUseListItem}>Дні народження</li>
          </ul>
          <p>
            і це далеко не повний список, де фотобука від Party Tools буде
            розважати ваших гостей
          </p>

          <img
            className={css.whereToUseImg}
            src={whereToUseImg}
            alt="де використовувати фотобудку"
          />
        </div>
        <div className={css.howItsWorks}>
          <h2 className={css.howItsWorksHeader}>Як працює фотобудка</h2>
          <ul className={css.howItWorksList}>
            <li className={css.howItWorksListItem}>
              <div className={css.howItWorksBulletPoint}>1</div>
              <p className={css.howItWorksListItemText}>
                Доставка та монтаж фото
              </p>
            </li>
            <li className={css.howItWorksListItem}>
              <div className={css.howItWorksBulletPoint}>1</div>
              <p className={css.howItWorksListItemText}>
                Доставка та монтаж фото
              </p>
            </li>
            <li className={css.howItWorksListItem}>
              <div className={css.howItWorksBulletPoint}>1</div>
              <p className={css.howItWorksListItemText}>
                Доставка та монтаж фото
              </p>
            </li>
            <li className={css.howItWorksListItem}>
              <div className={css.howItWorksBulletPoint}>1</div>
              <p className={css.howItWorksListItemText}>
                Доставка та монтаж фото
              </p>
            </li>
          </ul>
        </div>
        <div className={css.whyWe}>
          <h2 className={css.whyWeHeader}>Чому саме Party Tools</h2>
          <ul className={css.whyWeList}>
            <li className={css.whyWeListItem}>
              <p className={css.whyWeItemNumber}>6</p>{' '}
              <div className={css.whyWeBrLn}></div>
              <p className={css.whyWeItemText}>
                приносимо радість та приємні враження
              </p>
            </li>
            <li className={css.whyWeListItem}>
              <p className={css.whyWeItemNumber}>500+</p>{' '}
              <div className={css.whyWeBrLn}></div>
              <p className={css.whyWeItemText}>
                заходів проведено на вищому рівні
              </p>
            </li>
            <li className={css.whyWeListItem}>
              <p className={css.whyWeItemNumber}>100К+</p>
              <div className={css.whyWeBrLn}></div>
              <p className={css.whyWeItemText}>надруковано фотографій</p>
            </li>
          </ul>
        </div>
        <div className={css.whatYouGet}>
          <h2 className={css.whatYouGetHeader}>Обираючи нас ви отримуєте</h2>
          <ul className={css.whatYouGetList}>
            <li className={css.whatYouGetListItem}>
              <img
                className={css.whatYouGetImg}
                src={number1}
                alt="Результат 1"
                width="80"
                height="80"
              ></img>
              <p className={css.whatYouGetItemBold}>Якісне обладнання</p>
              <p className={css.whatYouGetItemText}>
                Професійні дзеркальні камери та студійне світло забезпечать
              </p>
            </li>
            <li className={css.whatYouGetListItem}>
              <img
                className={css.whatYouGetImg}
                src={number1}
                alt="Результат 1"
                width="80"
                height="80"
              ></img>
              <p className={css.whatYouGetItemBold}>Якісне обладнання</p>
              <p className={css.whatYouGetItemText}>
                Професійні дзеркальні камери та студійне світло забезпечать
              </p>
            </li>
            <li className={css.whatYouGetListItem}>
              <img
                className={css.whatYouGetImg}
                src={number1}
                alt="Результат 1"
                width="80"
                height="80"
              ></img>
              <p className={css.whatYouGetItemBold}>Якісне обладнання</p>
              <p className={css.whatYouGetItemText}>
                Професійні дзеркальні камери та студійне світло забезпечать
              </p>
            </li>
            <li className={css.whatYouGetListItem}>
              <img
                className={css.whatYouGetImg}
                src={number1}
                alt="Результат 1"
                width="80"
                height="80"
              ></img>
              <p className={css.whatYouGetItemBold}>Якісне обладнання</p>
              <p className={css.whatYouGetItemText}>
                Професійні дзеркальні камери та студійне світло забезпечать
              </p>
            </li>
            <li className={css.whatYouGetListItem}>
              <img
                className={css.whatYouGetImg}
                src={number1}
                alt="Результат 1"
                width="80"
                height="80"
              ></img>
              <p className={css.whatYouGetItemBold}>Якісне обладнання</p>
              <p className={css.whatYouGetItemText}>
                Професійні дзеркальні камери та студійне світло забезпечать
              </p>
            </li>
            <li className={css.whatYouGetListItem}>
              <img
                className={css.whatYouGetImg}
                src={number1}
                alt="Результат 1"
                width="80"
                height="80"
              ></img>
              <p className={css.whatYouGetItemBold}>Якісне обладнання</p>
              <p className={css.whatYouGetItemText}>
                Професійні дзеркальні камери та студійне світло забезпечать
              </p>
            </li>
          </ul>
        </div>
        <div className={css.smallPicturesBlock}>
          <ul className={css.smallPicturesBlockList}>
            <li className={css.smallPicturesBlockListItem}>
              <img
                src="https://picsum.photos/160/90"
                alt="Girl in a jacket"
                width="160"
                height="123"
              />
            </li>
            <li className={css.smallPicturesBlockListItem}>
              <img
                src="https://picsum.photos/160/90"
                alt="Girl in a jacket"
                width="160"
                height="123"
              />
            </li>
            <li className={css.smallPicturesBlockListItem}>
              <img
                src="https://picsum.photos/160/90"
                alt="Girl in a jacket"
                width="160"
                height="123"
              />
            </li>
            <li className={css.smallPicturesBlockListItem}>
              <img
                src="https://picsum.photos/160/90"
                alt="Girl in a jacket"
                width="160"
                height="123"
              />
            </li>
            <li className={css.smallPicturesBlockListItem}>
              <img
                src="https://picsum.photos/160/90"
                alt="Girl in a jacket"
                width="160"
                height="123"
              />
            </li>
            <li className={css.smallPicturesBlockListItem}>
              <img
                src="https://picsum.photos/160/123"
                alt="Girl in a jacket"
                width="160"
                height="123"
              />
            </li>
          </ul>
        </div>

        <div className={css.clients}>
          <p className={css.clientsHeader}>Наші клієнти</p>
          <ul className={css.clientsList}>
            <li className={css.clientsListItem}>
              <img
                src="https://picsum.photos/160/90"
                alt="Girl in a jacket"
                width="160"
                height="123"
              />
            </li>
            <li className={css.clientsListItem}>
              <img
                src="https://picsum.photos/160/90"
                alt="Girl in a jacket"
                width="160"
                height="123"
              />
            </li>
            <li className={css.clientsListItem}>
              <img
                src="https://picsum.photos/160/90"
                alt="Girl in a jacket"
                width="160"
                height="123"
              />
            </li>
            <li className={css.clientsListItem}>
              <img
                src="https://picsum.photos/160/90"
                alt="Girl in a jacket"
                width="160"
                height="123"
              />
            </li>
            <li className={css.clientsListItem}>
              <img
                src="https://picsum.photos/160/90"
                alt="Girl in a jacket"
                width="160"
                height="123"
              />
            </li>
            <li className={css.clientsListItem}>
              <img
                src="https://picsum.photos/160/90"
                alt="Girl in a jacket"
                width="160"
                height="123"
              />
            </li>
            <li className={css.clientsListItem}>
              <img
                src="https://picsum.photos/160/90"
                alt="Girl in a jacket"
                width="160"
                height="123"
              />
            </li>
            <li className={css.clientsListItem}>
              <img
                src="https://picsum.photos/160/90"
                alt="Girl in a jacket"
                width="160"
                height="123"
              />
            </li>
          </ul>
        </div>
        <div className={css.contacts}>
          <p>Контакти</p>
          <div className={css.contactForm}>
            <p className={css.contactFormText}>
              Зв'яжіться з нами або залиште заявку на зворотний дзвінок і наш
              менеджер зв'яжеться з вами!
            </p>
            <form className={css.contactFormForm}>
              <input
                placeholder="E-mail"
                className={css.contactFormInput}
                type="email"
              />
              <input
                placeholder="Ім'я"
                className={css.contactFormInput}
                type="text"
              />
              <input
                placeholder="Телефон"
                className={css.contactFormInput}
                type="phone"
              />
              <button className={css.contactFormButton} type="button">
                Надіслати
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="callback-form"></div>
      <div className={css.footer}>
        <img className={css.logoWhite} alt="logo" src={logoWhite}></img>
        <div className={css.footerMenu}>
          <p className={css.footerMenuHeader}>МЕНЮ</p>
          <ul className={css.footerMenuList}>
            <li className={css.footerMenuListItem}>
              <p className={css.footerMenuItem}>Послуги</p>
            </li>
            <li className={css.footerMenuListItem}>
              <p className={css.footerMenuItem}>Про нас</p>
            </li>

            <li className={css.footerMenuListItem}>
              <p className={css.footerMenuItem}>Контакти</p>
            </li>
          </ul>
        </div>
        <div className={css.footerServices}>
          <p className={css.footerServicesHeader}>ПОСЛУГИ</p>
          <ul className={css.footerServicesList}>
            <li className={css.footerServicesListItem}>
              <p className={css.footerServicesItem}>Photobooth</p>
            </li>
            <li className={css.footerServicesListItem}>
              <p className={css.footerServicesItem}>Photobooth with Chomakey</p>
            </li>

            <li className={css.footerServicesListItem}>
              <p className={css.footerServicesItem}>Selfie Mirror</p>
            </li>
            <li className={css.footerServicesListItem}>
              <p className={css.footerServicesItem}>Wi-Fi Print</p>
            </li>
            <li className={css.footerServicesListItem}>
              <p className={css.footerServicesItem}>GIF Booth</p>
            </li>
            <li className={css.footerServicesListItem}>
              <p className={css.footerServicesItem}>Instant Print</p>
            </li>
            <li className={css.footerServicesListItem}>
              <p className={css.footerServicesItem}>High Selfie</p>
            </li>
            <li className={css.footerServicesListItem}>
              <p className={css.footerServicesItem}>Sharig Station</p>
            </li>
          </ul>
        </div>
        <div className={css.footerContacts}>
          <a href="tel:+380679944144" className={css.footerContactsItem}>
            {' '}
            +38 (067) 994-4144
          </a>
          <p className={css.footerContactsItem}> info@partytools.com.ua</p>
        </div>
      </div>
    </div>
  );
}

export default App;
