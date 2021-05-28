import React from 'react'
import './Loader.css'
import loader from '../assets/loader.svg'

const Loader = () => {
    return (
        <div className="full-bg">
            <h2>Food Mood</h2>
            <img className="loader-photo" src={loader}/>
        </div>
    )
}

export default Loader
