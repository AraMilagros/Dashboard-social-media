import React from 'react'

import ItemSecundario from '../components/ItemSecundario';
import '../assets/css/Overview.css';
import data2 from '../assets/json/stastistics.json';

export default function Overview() {
    return (
        <>
            <div className='text'>
                <p>Overview - Today</p>
            </div>

            <div className='content-overview'>
                {
                    data2.map((item, i) => {
                        return (
                            <ItemSecundario key={i}
                                icon={item.icon}
                                views={item.views}
                                icon2={item.icon2}
                                statistics={item.statistics}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}
