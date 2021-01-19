import React from 'react'
import styled from 'styled-components'
import { Store } from '../../Redux/Store'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const StyledStartGame = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    h1 {
        font-family: 'Montserrat', sans-serif;
    }
    select {
        display: block;
        margin: 0 auto;
        width: 250px;
        padding: 10px;
        border: 1px solid #ddd;
        outline: none;
    }
    button {
        margin: 20px auto;
        display: flex;
        padding: 15px 45px;
        border: 1px solid #ddd;
        background-image: linear-gradient(-179deg,#5690FF 0,#387DFF 97%);
        color: white;
        border-radius: 4px;
        outline: none;
        font-family: 'Montserrat', sans-serif;
        cursor: pointer;
    }
`


const StartGame = () => {



    const [size, setSize] = useState(5)
    const history = useHistory()

    const handleStart = () => {
        Store.dispatch({ type: 'CHANGE_SIZE', payload: parseInt(size) })
        history.push('/game')
    }

    return (
        <StyledStartGame>
            <div>
                <h1>Choose game area size</h1>
                <select onChange={(e) => setSize(e.target.value)}>
                    <option value="5">5 x 5</option>
                    <option value="10">10 x 10</option>
                </select>
                <button onClick={handleStart}>START</button>
            </div>
        </StyledStartGame>
    )
}

export default StartGame