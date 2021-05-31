import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { listReceiptsDetails, addToFavourites, removeFromFavourites } from '../actions/receiptActions'
import Loader from '../components/Loader'

import back from '../assets/back.svg'
import fadedStar from '../assets/faded-star.svg'
import star from '../assets/star.svg'

const ReceiptDetails = ({ match }) => {

    const dispatch = useDispatch()
    const history = useHistory()
    const receiptDetails = useSelector((state) => state.receiptDetails)

    const favouritesData = useSelector((state) => state.favourites)

    const { loading, receipt, error } = receiptDetails

    const favourites = favouritesData.favouritesItems

    const addToFavouritesHandler = (item) => {
        dispatch(addToFavourites(item._id))
      }

      const removeFromFavouritesHandler = (item) => {
        dispatch(removeFromFavourites(item._id))
      }

    useEffect(() => {
        dispatch(listReceiptsDetails(match.params.id))
    }, [dispatch])

    return (
        <div className="Receipt">
        <div className="Receipt-header">
            <img className="Receipt-header-back" src={back} alt="search" onClick={() => history.goBack()}/>
            <h3 className="Receipt-header-heading">{receipt?.name}</h3>
            <img className="img-favourite" src={favourites.find((item) => item._id === receipt._id) ? star : fadedStar} alt="star" onClick={() => {
                if (favourites.find((item) => item._id === receipt._id)) {
                    removeFromFavouritesHandler(receipt)
                }
                else {
                    addToFavouritesHandler(receipt)
                }
                
            }}/>
        </div>
        {loading && <Loader />}
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
