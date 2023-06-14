import React from 'react'

import '../assets/css/ItemPrincipal.css';
const iconos = require.context('../assets/img/', true);

export default function ItemPrincipal(props) {

  const upDown = (cadena) => {
    const bol = cadena.includes('up');
    return bol;
  }

  const detectar = (cadena) => {
    let classe = null
    if(cadena.includes('facebook')){
      classe="fb";
    }
    if(cadena.includes('instagram')){
      classe="ig";
    }
    if(cadena.includes('twitter')){
      classe="twt";
    }
    if(cadena.includes('youtube')){
      classe="yt";
    }
    return classe;
  }


  return (
    <div className={`${detectar(props.icon)} itemContent`}>
      <div className='itemContent__etiqueta'>
        <img className='etiqueta--img'
          src={iconos(props.icon)} alt="fb" />
        <label className='etiqueta--label'>@{props.user}</label>
      </div>
      <p className='itemContent--number'>{props.number}</p>
      <p className='itemContent--flw'>FOLLOWERS</p>

      <div className='itemContent__statistics'>
        <img className='statistics--img'
          src={iconos(props.icon2)} alt="" />
        <label
          className={upDown(props.icon2) ? 'statistics--number greenText' : 'statistics--number redText'} >{props.followers} Today </label>
      </div>
    </div>
  )
}
