import React, { useState } from 'react'

import ItemPrincipal from '../components/ItemPrincipal';
import '../assets/css/Deshboard.css';
import data from '../assets/json/data.json';


export default function Deshboard() {

    const [bandera, setBandera] = useState(false);

    const cambiarTheme = () => {
        bandera ? document.body.setAttribute('data-theme', 'light') : document.body.setAttribute('data-theme', 'dark');

        setBandera(!bandera);
    }

    return (
        <main>

            <header className='encabezado'>
                <section className='content-text'>
                    <h1>Social Media Dashboard</h1>
                    <p>Total Followers: 23,004</p>
                </section>
                <section className='theme'>
                    <p>Dark Mode</p>
                    <div className="button">
                        <input id="btn-check"
                            type="checkbox" onClick={cambiarTheme}></input>
                        <label htmlFor="btn-check" className='lbl-check'></label>
                    </div>
                </section>
            </header>
            <section className='content-deshboard'>
                {
                    data.map((item, i) => {
                        return (
                            <ItemPrincipal key={i}
                                icon={item.icono}
                                user={item.user}
                                number={item.number}
                                icon2={item.icon2}
                                followers={item.followers}
                            />
                        )
                    })
                }
            </section>
        </ main>
    )
}
