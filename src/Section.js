import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({ id, title, description, image }) {
    return (
        <Wrap image={image}>
            <Fade bottom>
                <Title>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </Title>
            </Fade>

            <Bottom>
                <Fade bottom>
                    <Buttongroup>
                        <LeftButton>
                            {(id === 4 || id === 5) ? "Order Now" : "Custom Order"}
                        </LeftButton>
                        <RightButton>
                            {(id === 4 || id === 5) ? "Learn More" : "Existing Inventory"}
                        </RightButton>
                    </Buttongroup>
                </Fade>
                {title === "Model S" && <DownArrow src="/assets/down-arrow.svg" />}
            </Bottom>
        </Wrap>
    )
}

const Wrap = styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    background-image: ${props => `url(/assets/${props.image})`};
    background-size:cover;
    background-position:center;
    scroll-snap-align:start;
`

const Title = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top: 100px;
`

const Buttongroup = styled.div`
    margin-bottom: 50px;
    @media(max-width: 768px){
        display:flex;
        flex-direction:column;
    }
`

const Bottom = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
`

const LeftButton = styled.button`
    padding:10px 0;
    width:250px;
    border-style:none;
    background-color:black;
    border-radius: 20px;
    margin:8px;
    cursor:pointer;
    text-transform:uppercase;    
    opacity: 0.6;
    color:white;
    font-weight:550;
`

const RightButton = styled(LeftButton)`
    background-color:white;
    color:#393c41
`

const DownArrow = styled.img`
    height:40px;
`

export default Section
