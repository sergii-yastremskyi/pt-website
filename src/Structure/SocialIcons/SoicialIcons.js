import React from 'react';
import SocialIconsListItem from './SocialIconsListItem/SocialIconsListItem';
import css from './socialIconsList.module.css'

import { ReactComponent as InstaLogo } from '../../Assets/svg/icons8-instagram-circle-120.svg';
import { ReactComponent as FacebookLogo } from '../../Assets/svg/icons8-facebook-100.svg';
export default function SoicialIcons() {
  const socialIconsContent = [
    {
      text: 'Instagram',
      link: 'https://www.instagram.com/party_tools_photo/',
      img: <InstaLogo/>,
    },
    {
      text: 'Facebook',
      link: 'https://www.facebook.com/PartyToolsPhoto',
      img: <FacebookLogo/>,
    },
  ];
  return (
    <div className={css.socailIcons }>
      <ul className={css.socialIconsList}>
       
         
        <SocialIconsListItem list={socialIconsContent} /> 
       
      </ul>
    </div>
  );
}
