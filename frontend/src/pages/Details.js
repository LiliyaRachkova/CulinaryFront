import React from 'react'

import back from '../assets/back.svg'
import fadedStar from '../assets/faded-star.svg'
import favorite from '../assets/star.svg'

const ReceiptDetails = () => {
    return (
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
}

export default ReceiptDetails
