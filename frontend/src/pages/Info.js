import React from 'react'
import { useHistory } from 'react-router-dom'

import back from '../assets/back.svg'

const Info = () => {
    const history = useHistory()
    return (
        <div className="info">
            <div className="Recepies-header">
                <img className="Recepies-header-back" src={back} alt="search" onClick={() => history.goBack()}/>
                <h3 className="Recepies-header-heading">Favourites</h3>
            </div>
            <div className="info-body">
            <p>
            При открытии приложения открывается начальный экран. Далее выбирается дальнейшее действие(Избранное/Ввод ингредиентов). 

При выборе Избранного: Переходим на экран Избранного где отображаются рецепты с отметкой избранное.  Далее при нажатии на любой из рецептов открывается окно с полным описанием. 

При выборе Ввода ингредиентов: Переходим на экран ввода. При начале ввода в первое поле добавляется следующее поле ввода и так до тех пор пока количество полей не достигнет 6. После нажимается кнопка подбора, отображается экран загрузки и выводится список подобранных рецептов. Далее при нажатии на любой из рецептов открывается окно с полным описанием.
            </p>
            </div>
        </div>
    )
}

export default Info
