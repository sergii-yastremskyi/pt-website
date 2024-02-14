import React, { useState } from 'react';
import css from './smallImg.module.css';
import img1 from '../../Assets/img/SmallImg1.jpg';
import img2 from '../../Assets/img/SmallImg2.jpg';
import img3 from '../../Assets/img/SmallImg3.jpg';
import img4 from '../../Assets/img/SmallImg4.jpg';
import img5 from '../../Assets/img/SmallImg5.jpg';
import img6 from '../../Assets/img/SmallImg6.jpg';
import img7 from '../../Assets/img/SmallImg7.jpg';
import img8 from '../../Assets/img/SmallImg8.jpg';
import Lightbox, { CLASS_FLEX_CENTER } from 'yet-another-react-lightbox';
import SmallImgsListItem from './SmallImgsListItem/SmallImgsListItem';
import { useScrollTo } from '../../hooks/useScrollTo';
import { Gallery } from 'react-grid-gallery';
import 'yet-another-react-lightbox/styles.css';

export default function SmallImg() {
  const elemId = 'gallery';
  useScrollTo(elemId);
  const imgs = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img7 },
    { img: img8 },
  ];
  const imgs1 = [
    { src: img1, width: 600, height: 800 },
    { src: img2, width: 1680, height: 1120 },
    { src: img3, width: 800, height: 533 },
    { src: img4, width: 800, height: 533 },
    { src: img5, width: 800, height: 600 },
    { src: img6, width: 800, height: 533 },
    { src: img7, width: 533, height: 800 },
    { src: img8, width: 686, height: 800 },
  ];

  const [index, setIndex] = useState(-1);
  const slides = imgs1.map(({ src, width, height }) => ({
    src: src,
    width,
    height,
  }));
  console.log(slides);
  const handleClick = index => {
    setIndex(index);
  };
  return (
    <div id={elemId} className={css.smallImg}>
      <div className={css.gallery}>
        {imgs1.map((item, i) => {
          return (
            <div className={css.galleryItem} onClick={() => handleClick(i)}>
              <img className={css.galleryImg} alt="photobooth" src={item.src} />
            </div>
          );
        })}
      </div>
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
      {console.log(index, 'in render')}

      {/* <ul className={css.smallImgList}>
        <SmallImgsListItem content={imgs} />
      </ul> */}
    </div>
  );
}
