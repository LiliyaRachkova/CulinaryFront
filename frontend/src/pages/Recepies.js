import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Server } from '../serverData/dummyServer'
import axios from 'axios'
import './styles.scss'

import favorite from '../assets/star.svg'

import back from '../assets/back.svg'
import fadedStar from '../assets/faded-star.svg'

const Recepies = () => {

    let [ selectedRec, setSelectedRec ] = useState(null) 

    let server = new Server

    let history = useHistory()
    let location = useLocation()

    let recepies = server.post(location.search.split('=')[1].split('+'))

    // let recepies = axios.get('https://master-culinary-site.herokuapp.com/rec')
    // .then((data) => console.log(data))

    const recList = (
        <div className="Recepies">
            <div className="Recepies-header">
                <img className="Recepies-header-back" src={back} alt="search" onClick={() => history.push('/add')}/>
                <h3 className="Recepies-header-heading">Recepies</h3>
            </div>
            <div className="Recepies-body">
                {recepies.map((rec) => (
                    <div className="Recepies-block" onClick={() => {
                        setSelectedRec(rec)
                    }}>
                        <div className="dummy-photo"></div>
                        <div className="Recepies-block-data">
                            <h5> {rec.name.slice(0, 20)+'...'} </h5>
                            <p> { rec.Инструкции.slice(0, 80)+'...' } </p>
                        </div>
                        {/* <img src={favorite} alt="favorite" /> */}
                    </div>
                ))}
            </div>
        </div>
    )

    console.log(selectedRec)

    const recPage = (
        <div className="Receipt">
            <div className="Receipt-header">
                <img className="Receipt-header-back" src={back} alt="search" onClick={() => history.push('/add')}/>
                <h3 className="Receipt-header-heading">{selectedRec?.name}</h3>
                <img className="Receipt-header-back" src={fadedStar} alt="star" onClick={() => console.log(4)}/>
            </div>
            <div className="Receipt-body">
                <div className="Receipt-body-photo-wrapper">
                    <div className="dummy-photo"></div>
                    <div className="Receipt-body-photo-desc">
                        {selectedRec?.composition.map(item => {
                            return (
                                <p className="Peceipt-body-photo-desc__units">{Object.keys(item)[0]}: {item[Object.keys(item)[0]]} {item.unit}</p>
                            )
                        })}
                    </div>
                </div>
                <div className="Receipt-body-desc">{selectedRec?.Инструкции}</div>
            </div>
        </div>
    )

    return selectedRec ? recPage : recList
}

export default Recepies
