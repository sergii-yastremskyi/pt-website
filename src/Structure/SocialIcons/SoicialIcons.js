import React from 'react';
import SocialIconsListItem from './SocialIconsListItem/SocialIconsListItem';
import css from './socialIconsList.module.css'
export default function SoicialIcons() {
  const socialIconsContent = [
    {
      text: 'Instagram',
      link: 'https://www.instagram.com/party_tools_photo/',
      img: 'https://via.placeholder.com/50?text=I',
    },
    {
      text: 'Facebook',
      link: 'https://www.facebook.com/PartyToolsPhoto',
      img: 'https://via.placeholder.com/50?text=F',
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
