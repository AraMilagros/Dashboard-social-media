import React from 'react'
const iconos = require.context('../assets/img/', true);

import '../assets/css/ItemSecundario.css';

export default function ItemSecundario(props) {
    const detectar = (cadena) => {
        const bol = cadena.includes('up');
        return bol;
    }

    return (
        <article className='contentSecondary'>
            <div className='contentSecondary__first'>
                <label className='first--label'>Page Views</label>
                <img className='first--img'
                    src={iconos(props.icon)} alt="icon-social-media"
                />
            </div>

            <div className='contentSecondary__second'>
                <label className='second--label'>{props.views}</label>
                <div className='second__statistics'>
                    <img className='statistics--img'
                        src={iconos(props.icon2)} alt="up-down"/>
                    <label
                        className={detectar(props.icon2) ? 'statistics--label greenText' : 'statistics--label redText'} >{props.statistics}
                    </label>
                </div>
            </div>
        </article>
    )
}
