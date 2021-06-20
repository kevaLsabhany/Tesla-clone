import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import carInfo from './carInfo'

function Home() {
    return (
        <Container>
            {
                carInfo && carInfo.map(car => (
                    <Section key={car.id} {...car} />
                ))
            }
        </Container>
    )
}

const Container = styled.div`
    height:100vh;
    overflow-y:scroll;
    scroll-snap-type:y mandatory;
`

export default Home
