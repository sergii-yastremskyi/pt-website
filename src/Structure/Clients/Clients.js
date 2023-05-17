import React from 'react'
import css from './clients.module.css'
import ClientListItem from './ClientsListItem/ClientListItem'
import onePlusOne from '../../Assets/img/1_plus_1_logo.png'
import m2 from '../../Assets/img/M2.png'
import vintage from '../../Assets/img/VINTAGE_logo.png'
import mh from '../../Assets/img/MH_EVENT.png'
import cc from '../../Assets/img/Coca-Cola_log.png'
import air from '../../Assets/img/AIR.png'
import atlantic from '../../Assets/img/AGL.png'
import acc from '../../Assets/img/ACC.png'
import lavina from '../../Assets/img/lavina.png'
import comfy from '../../Assets/img/comfy-logo-new_copy.png'
import kyivstar from '../../Assets/img/KYIVSTAR.png'
import elle from '../../Assets/img/ELLE_Magazine_Logosv.png'
import finlandia from '../../Assets/img/finlandia-vodka-1047.png'
import guliver from '../../Assets/img/Gulliver_aabb_copy.png'
import bazar from '../../Assets/img/Harpers_Bazaar_logo_.png'
import pink from '../../Assets/img/pink.png'
import huawei from '../../Assets/img/huawei_copy.png'
import hundai from '../../Assets/img/Hyundai_Logo_copy.png'
import jack from '../../Assets/img/jack-daniels-logo-pn.png'
import jti from '../../Assets/img/Jti.png'
import johnie from '../../Assets/img/JWalker_2015_logo_co.png'
import kenzo from '../../Assets/img/kenzo-logo-8D4AF8EDE.png'
import kia from '../../Assets/img/Kia-logo-2560x1440_c.png'
import martini from '../../Assets/img/Martini.png'
import volga from '../../Assets/img/vlg_logo_copy.png'
import lviv from '../../Assets/img/Lviv.png'
import dzwinner from '../../Assets/img/Dzwinner_logo_copy.png'
import pg from '../../Assets/img/Procter_and_Ga.png'
import skywind from '../../Assets/img/skywind_logo.png'
import unisender from '../../Assets/img/unisender_logo.png'
import loreal from '../../Assets/img/Loreal_Groupe-1167x2.png'
import mcdonalds from '../../Assets/img/Mcdonalds_copy.png'
import jager from '../../Assets/img/Jeger.png'
import nlo from '../../Assets/img/NLO_TV_copy.png'
import ocean from '../../Assets/img/oceanplaza_copy.png'
import bayadera from '../../Assets/img/Bayadera.png'
import royalCanin from '../../Assets/img/Royal-Canin-Logosvg_.png'
import schweppes from '../../Assets/img/Schweppes.png'
import toyota from '../../Assets/img/toyota.png'
import tsarsky from '../../Assets/img/tsarsky_copy.png'
import virni from '../../Assets/img/virni.png'

export default function Clients() {
  const logos=[
    {img:onePlusOne},
    {img:m2},
    {img:vintage},
    {img:mh},
    {img:cc},
    {img:air},
    {img:atlantic},
    {img:acc},
    {img:lavina},
    {img:comfy},
    {img:kyivstar},
    {img:elle},
    {img:finlandia},
    {img:guliver},
    {img:bazar},
    {img:pink},
    {img:huawei},
    {img:hundai},
    {img:jack},
    {img:jti},
    {img:johnie},
    {img:kenzo},
    {img:kia},
    {img:martini},
    {img:volga},
    {img:lviv},
    {img:dzwinner},
    {img:skywind},
    {img:unisender},
    {img:loreal},
    {img:mcdonalds},
    {img:jager},
    {img:nlo},
    {img:bayadera},
    {img:royalCanin},
    {img:schweppes},
    {img:toyota},
    {img:tsarsky},
    {img:virni},
    {img:ocean},
    {img:pg},

  ];
  return (
    <div className={css.clients}>
    <p className={css.clientsHeader}>Наші клієнти</p>
    <ul className={css.clientsList}>
     <ClientListItem content={logos}/>
     
    </ul>
  </div>
  )
}
