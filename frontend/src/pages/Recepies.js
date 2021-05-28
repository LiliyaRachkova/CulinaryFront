import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listReceipts } from '../actions/receiptActions'
import { getFiltered } from './utils'
import Loader from '../components/Loader'
import './styles.css'


import back from '../assets/back.svg'

const Recepies = () => {

    const dispatch = useDispatch()
    const location = useLocation()
    const recepies = useSelector((state) => state.receiptList)

    const { loading, receipts, error } = recepies

    let history = useHistory()

    let filteredRecepies = getFiltered(receipts, location)

    console.log(receipts[0])


    useEffect(() => {
        dispatch(listReceipts())
    }, [dispatch])

    return  (
        <div className="Recepies">
            <div className="Recepies-header">
                <img className="Recepies-header-back" src={back} alt="search" onClick={() => history.goBack()}/>
                <h3 className="Recepies-header-heading">Recepies</h3>
            </div>
            <div className="Recepies-body">
                {loading && <Loader />}
                {filteredRecepies.length ? filteredRecepies.map((rec) => (
                    <div className="Recepies-block" onClick={() => {
                        history.push(`/receipt/${rec._id}`)
                    }}>
                        <img className="Recepies-photo" src={`../images/${rec.photo}`}/>
                        <div className="Recepies-block-data">
                            <h5> {rec.name} </h5>
                            <p> { rec.composition_inter.join(', ') } </p>
                        </div>
                        {/* <img src={favorite} alt="favorite" /> */}
                    </div>
                )) : !loading && <div className="Recepies-body_not-found"><p>Sorry, but we didn't find any recepies</p></div>}
            </div>
        </div>
    )

    

}

export default Recepies
