import styled from 'styled-components'
import { useSelector } from 'react-redux'
import AreaItem from '../GameArea/AreaItem'
import { useState, useEffect } from 'react'
import uuid from 'react-uuid'


const StyledArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 30px auto;
    justify-content: center;
`


const GameArea = ({ maxWidth }) => {
    const areaSize = useSelector(state => state.gameAreaReducer.areaSize)

    const [areaItems, setAreaItems] = useState([])
    const [itemTypes, setItemTypes] = useState(['wall', 'animal', 'null'])

    useEffect(() => {
        for (let i = 0; i < areaSize * areaSize; i++) {
            let newItem = {
                id: uuid(),
                type: itemTypes[Math.floor(Math.random() * itemTypes.length)]
            }
            setAreaItems(oldData => [...oldData, newItem])
        }

    }, [areaSize])

    console.log(areaItems)


    // for (let i = 0; i < areaSize * areaSize; i++) {
    //     aa.push(<AreaItem key={i} />)
    // }
    return (
        <StyledArea style={{ maxWidth: maxWidth, minWidth: maxWidth }}>
            {
                areaItems.map((item, index) => {
                    return (
                        <div>
                            <AreaItem type={item.type} key={index} />
                        </div>
                    )
                })
            }
        </StyledArea>
    )
}

export default GameArea