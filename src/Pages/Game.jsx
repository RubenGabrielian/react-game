import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import GameArea from '../Components/GameArea/GameArea'

const Game = () => {

    const history = useHistory()
    const areaSize = useSelector(state => state.gameAreaReducer.areaSize)
    if (areaSize === 0) {
        history.push('/')
    }



    return (
        <div>
            <Link to='/'>Back</Link>
            <GameArea maxWidth={areaSize * 110} />

        </div>
    )
}

export default Game;