import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listReceipts } from '../actions/receiptActions'
import { getFiltered } from './utils'
import './styles.css'

import favorite from '../assets/star.svg'

import back from '../assets/back.svg'
import fadedStar from '../assets/faded-star.svg'

const Recepies = () => {

    const dispatch = useDispatch()
    const location = useLocation()
    const recepies = useSelector((state) => state.receipts)
    let [ selectedRec, setSelectedRec ] = useState(null) 

    let history = useHistory()

    let filteredRecepies = getFiltered(recepies, location)

    const recList = (
        <div className="Recepies">
            <div className="Recepies-header">
                <img className="Recepies-header-back" src={back} alt="search" onClick={() => history.push('/add')}/>
                <h3 className="Recepies-header-heading">Recepies</h3>
            </div>
            <div className="Recepies-body">
                {filteredRecepies.length ? filteredRecepies.map((rec) => (
                    <div className="Recepies-block" onClick={() => {
                        setSelectedRec(rec)
                    }}>
                        <img className="Recepies-photo" src={`../images/${rec.photo}`}/>
                        <div className="Recepies-block-data">
                            <h5> {rec.name.slice(0, 20)+'...'} </h5>
                            <p> { rec.instruction.slice(0, 80)+'...' } </p>
                        </div>
                        {/* <img src={favorite} alt="favorite" /> */}
                    </div>
                )) : <div className="Recepies-body_not-found"><p>Sorry, but we didn't find any recepies</p></div>}
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
                <img className="Recepies-photo" src={`../images/${selectedRec?.photo}`}/>
                    <div className="Receipt-body-photo-desc">
                        {selectedRec?.composition.map(item => {
                            return (
                                <p className="Peceipt-body-photo-desc__units">{item.name}: {item.qnt} {item.unit}</p>
                            )
                        })}
                    </div>
                </div>
                <div className="Receipt-body-desc">{selectedRec?.instruction}</div>
            </div>
        </div>
    )

    

    if (!recepies) {
        console.log(4)
        dispatch(listReceipts())
    }

    return selectedRec ? recPage : recList
}

export default Recepies
