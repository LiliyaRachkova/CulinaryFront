import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromFavourites } from '../actions/receiptActions'
import { getFiltered } from './utils'
import Loader from '../components/Loader'
import './styles.css'


import back from '../assets/back.svg'
import star from '../assets/star.svg'

const Favourites = () => {

    const dispatch = useDispatch()
    const favouritesData = useSelector((state) => state.favourites)

    const favourites = favouritesData.favouritesItems

    let history = useHistory()

      const removeFromFavouritesHandler = (item) => {
        dispatch(removeFromFavourites(item._id))
      }


    return  (
        <div className="Recepies">
            <div className="Recepies-header">
                <img className="Recepies-header-back" src={back} alt="search" onClick={() => history.goBack()}/>
                <h3 className="Recepies-header-heading">Favourites</h3>
            </div>
            <div className="Recepies-body">
                {/* {loading && <Loader />} */}
                {favourites.length ? favourites.map((rec) => (
                    <div className="Recepies-block" >
                        <img className="Recepies-photo" src={`../images/${rec.photo}`} onClick={() => {
                        history.push(`/receipt/${rec._id}`)
                    }}/>
                        <div className="Recepies-block-data" onClick={() => {
                        history.push(`/receipt/${rec._id}`)
                    }}>
                            <h5> {rec.name} </h5>
                            <p> { rec.composition_inter.slice(0, 9).join(', ') } </p>
                        </div>
                        <img className="img-favourite" src={star} alt="favorite" style={{height: '100%'}} onClick={() => {
                                removeFromFavouritesHandler(rec)
                            }
                            
                            }/>
                    </div>
                )) : <div className="Recepies-body_not-found"><p>Sorry, but we didn't find any favourites</p></div>}
            </div>
        </div>
    )

    

}

export default Favourites
