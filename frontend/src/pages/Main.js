import React from 'react'
import { useHistory } from 'react-router-dom'
import './styles.css'

import search from '../assets/search.svg'
import star from '../assets/star.svg'
import info from '../assets/info.svg'

const Main = () => {
    let history = useHistory()
    return (
        <div className="Main-page">
            <h1 className="Main-header">Food Mood</h1>
            <div className="Main-button-group">
                <button className="Main-button-group__button" onClick={() => history.push('/add')}>
                    <img src={search} alt='seatch'/>
                    <div className="Main-button-group__wrapper-button">
                        <h3>Add ingredients</h3>
                    </div>
                </button>
                <button className="Main-button-group__button">
                <img src={star} alt='star'/>
                <div className="Main-button-group__wrapper-button">
                        <h3>Favourites</h3>
                    </div>
                </button>
                <button className="Main-button-group__button">
                <img src={info} alt='info'/>
                    <div className="Main-button-group__wrapper-button">
                        <h3>Info</h3>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Main
