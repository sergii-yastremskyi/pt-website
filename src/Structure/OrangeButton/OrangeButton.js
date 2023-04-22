import React from 'react'
import css from './orangeButton.module.css'
export default function OrangeButton({label}) {
  return (
    <button type="button" className={css.button}>
      {label}
    </button>
  )
}
