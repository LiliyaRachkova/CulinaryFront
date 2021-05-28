import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { listReceiptsDetails } from '../actions/receiptActions'

import back from '../assets/back.svg'
import fadedStar from '../assets/faded-star.svg'
import favorite from '../assets/star.svg'

const ReceiptDetails = ({ match }) => {

    const dispatch = useDispatch()
    const history = useHistory()
    const receiptDetails = useSelector((state) => state.receiptDetails)

    const { loading, receipt, error } = receiptDetails

    console.log(receipt)

    useEffect(() => {
        dispatch(listReceiptsDetails(match.params.id))
    }, [dispatch])

    return (
        <div className="Receipt">
        <div className="Receipt-header">
            <img className="Receipt-header-back" src={back} alt="search" onClick={() => history.goBack()}/>
            <h3 className="Receipt-header-heading">{receipt?.name}</h3>
            <img className="Receipt-header-back" src={fadedStar} alt="star" onClick={() => console.log(4)}/>
        </div>
        {loading && <div className="Recepies-body_not-found"><p>Loading... Please, wait</p></div>}
        {!loading && <div className="Receipt-body">
            <div className="Receipt-body-photo-wrapper">
            <img className="Recepies-photo" src={`../images/${receipt?.photo}`}/>
                <div className="Receipt-body-photo-desc">
                    {receipt?.composition?.map(item => {
                        return (
                            <p className="Peceipt-body-photo-desc__units">{item.name}: {item.qnt} {item.unit}</p>
                        )
                    })}
                </div>
            </div>
            <div className="Receipt-body-desc">{receipt?.instruction}</div>
        </div>}
    </div>
    )
}

export default ReceiptDetails
