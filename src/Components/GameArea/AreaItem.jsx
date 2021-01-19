import React from 'react'
import styled from 'styled-components'
import wallImg from '../../img/wall.jpg'
import animalImg from '../../img/animal.png'
import personImg from '../../img/i.jpg'
const StyledAreaItem = styled.div`

margin:2px;
width: 100px;
height: 100px;
border: 1px solid black;

`

const AreaItem = ({ type }) => {

    let typeImg = '';

    if (type === 'wall') {
        typeImg = `url(${wallImg})`;
    }
    if (type === 'animal') {
        typeImg = `url(${animalImg})`;
    }
    if (type === 'null') {
        typeImg = '';
    }
    if (type === 'person') {
        typeImg = `url(${personImg})`
    }

    return (
        <div className={type}>
            <StyledAreaItem style={{ backgroundImage: typeImg }} ></StyledAreaItem>
        </div>
    )
}

export default AreaItem