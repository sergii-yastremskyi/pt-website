import React from 'react'
import css  from './whyWe.module.css'
import WhyWeListItem from './WhyWeListItem'

export default function WhyWe() {
  const whyWeContent =[
    {header:'6+',text:'років приносимо радість та приємні враження'},
    {header:'500+',text:'заходів проведено на вищому рівні'},
    {header:'100К+',text:'надруковано фотографій'}]
  return (
    <div className={css.whyWe}>
    <h2 className={css.whyWeHeader}>Чому саме Party Tools</h2>
    <ul className={css.whyWeList}>
     <WhyWeListItem content={whyWeContent}/>
    </ul>
  </div>
  )
}
