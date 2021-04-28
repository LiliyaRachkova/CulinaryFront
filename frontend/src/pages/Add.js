import React, { useState } from 'react'

import cross from '../assets/cross.svg'
import search from '../assets/search.svg'

const Add = () => {

    const [firstInputValue, setFirstInputValue] = useState('')
    const [secondInputValue, setSecondInputValue] = useState('')
    const [thirdInputValue, setThirdInputValue] = useState('')
    const [fourthInputValue, setFourthInputValue] = useState('')
    const [fifthInputValue, setFifthInputValue] = useState('')

    const handleSearch = () => {
        console.log([firstInputValue, secondInputValue, thirdInputValue, fourthInputValue, fifthInputValue])
    }

    return (
        <div className="Add">
            <h3>Ingredients</h3>
            <div className="Add-ingredients-wrapper">

                <div className={`Add-ingredients-input-wrapper`}>
                    <input value={firstInputValue} onChange={(e) => setFirstInputValue(e.target.value)}/>
                    <img src={cross} onClick={() => setFirstInputValue('')} alt="delete" className={`hidden--${!firstInputValue || !!secondInputValue}`}/>
                </div>

                <div className={`Add-ingredients-input-wrapper hidden--${!firstInputValue}`}>
                    <input value={secondInputValue} onChange={(e) => setSecondInputValue(e.target.value)}/>
                    <img src={cross} onClick={() => setSecondInputValue('')} alt="delete" className={`hidden--${!secondInputValue || !!thirdInputValue}`}/>
                </div>

                <div className={`Add-ingredients-input-wrapper hidden--${!secondInputValue}`}>
                    <input value={thirdInputValue} onChange={(e) => setThirdInputValue(e.target.value)}/>
                    <img src={cross} onClick={() => setThirdInputValue('')} alt="delete" className={`hidden--${!thirdInputValue || !!fourthInputValue}`}/>
                </div>

                <div className={`Add-ingredients-input-wrapper hidden--${!thirdInputValue}`}>
                    <input value={fourthInputValue} onChange={(e) => setFourthInputValue(e.target.value)}/>
                    <img src={cross} onClick={() => setFourthInputValue('')} alt="delete" className={`hidden--${!fourthInputValue || !!fifthInputValue}`}/>
                </div>

                <div className={`Add-ingredients-input-wrapper hidden--${!fourthInputValue}`}>
                    <input value={fifthInputValue} onChange={(e) => setFifthInputValue(e.target.value)}/>
                    <img src={cross} onClick={() => setFifthInputValue('')} alt="delete" className={`hidden--${!fifthInputValue}`}/>
                </div>
            </div>
            <img className="Add-search" src={search} alt="search" onClick={handleSearch}/>
        </div>
    )
}

export default Add
