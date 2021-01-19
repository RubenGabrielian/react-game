import React from 'react'
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
    const itemTypes = ['wall', 'animal', 'null', 'person']


    let wallCount = 0;
    let animalCount = 0;
    let personCount = 0;
    const wallIndex = itemTypes.indexOf('wall');
    const animalIndex = itemTypes.indexOf('animal');
    const personIndex = itemTypes.indexOf('person');

    const areaBuilder = () => {

        for (let i = 0; i < areaSize * areaSize; i++) {

            let randomType = itemTypes[Math.floor(Math.random() * itemTypes.length)]

            if (randomType === 'wall') {
                wallCount++
            }

            if (randomType === 'animal') {
                animalCount++
            }

            if (randomType === 'person') {
                personCount++
            }

            // if (wallCount >= 7) {
            //     if (wallIndex > -1) {
            //         itemTypes.splice(wallIndex, 1);
            //     }
            // }

            // if (animalCount >= 3) {
            //     if (animalIndex > -1) {
            //         itemTypes.splice(animalIndex, 1);
            //     }
            // }

            if (personCount >= 1) {
                if (personIndex > -1) {
                    itemTypes.splice(personIndex, 1);
                }
            }

            let newItem = {
                id: uuid(),
                type: randomType
            }
            setAreaItems(oldData => [...oldData, newItem])
        }
    }

    const areaCreator = React.useCallback(() => {
        areaBuilder()
    }, [areaSize])

    useEffect(() => {
        areaCreator()
    }, [areaCreator])


    const handleKeyDown = (e) => {
        if (e.keyCode === 38) {
            alert('verev')
        }
        if (e.keyCode === 40) {
            let person = areaItems.filter((i) => i.type == 'person')
            console.log(person)
        }
        if (e.keyCode === 37) {
            alert('dzax')
        }
        if (e.keyCode === 39) {
            alert('aj')
        }

    }

    return (
        <div onKeyDown={handleKeyDown} tabIndex={0}>
            <StyledArea style={{ maxWidth: maxWidth, minWidth: maxWidth }}>
                {
                    areaItems.map((item, index) => {
                        return (
                            <div>
                                <AreaItem key={item.id} type={item.type} />
                            </div>
                        )
                    })
                }
            </StyledArea>
        </div>
    )
}

export default GameArea