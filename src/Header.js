import React, { useState } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


function Header() {
    const [close, setClose] = useState(true);
    return (
        <Wrapper>
            <Image src="/assets/logo.svg" />
            <Option>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Solar Roof</a>
                <a href="#">Solar Panel</a>
            </Option>
            <Menu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <a href="#" onClick={() => setClose(false)}>Menu</a>
            </Menu>
            {
                close ||

                <BurgerNav>
                    <Close><p onClick={() => setClose(true)}>Close</p></Close>
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Used Inventory</a></li>
                    <li><a href="#">Trade-In</a></li>
                    <li><a href="#">Test Drive</a></li>
                    <li><a href="#">Cybertruck</a></li>
                    <li><a href="#">Roadster</a></li>
                    <li><a href="#">Semi</a></li>
                    <li><a href="#">Charging</a></li>
                    <li><a href="#">Powershell</a></li>
                    <li><a href="#">Commercial Energy</a></li>
                    <li><a href="#">Utilities</a></li>
                    <li><a href="#">Find Us</a></li>
                    <li><a href="#">Support</a></li>
                </BurgerNav>
            }
        </Wrapper >
    )
}

const Close = styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:center;
    height:80px;
    p{
        margin-right:32px;
        color:white;
        background-color:red;
        border-radius:20px;
        padding:8px;
        cursor:pointer;
}`

const BurgerNav = styled.div`
    z-index:50;
    background-color:white;
    position:fixed;
    right:0;
    bottom:0;
    top:0;
    width:300px;
    li {
        margin-left:40px;
        list-style-type:none;
        width:200px;
        margin-top:8px;
        margin-bottom:8px;
        padding:10px 10px;
        border-radius:15px;
    }
    li:hover{
        transition:all 0.3s ease-in-out;
        background-color:rgba(0,0,0,0.1);
    }
    a{
        text-decoration:none;
    }
`

const Wrapper = styled.div`
    z-index:10;
    display:flex;
    justify-content:space-between;
    position:fixed;
    left:0;
    right:0;
    top:0;
    margin: 16px 16px;
`

const Image = styled.img` 
    display:flex;
    align-items:center;
    object-fit:contain;
    height:25px;
    margin-left: 16px;
`

const Option = styled.div`
    @media(max-width:1300px) {
        display:none;
    }
    display:flex;
    align-items:center;
    a {
        text-decoration:none;
        padding:8px;    
        margin: 0 16px;
        font-weight:600;
        cursor: pointer;
        border-radius:10px;
    }
    a:hover {
        transition:all 0.3s ease-in-out;
        background-color: rgba(0,0,0,0.1);
    }

`

const Menu = styled.div`
    display:flex;
    align-items:center;
    a{
        text-decoration:none;
        padding:8px;
        margin:0 8px;
        font-weight:600;
        cursor: pointer;
        border-radius:10px;
    }
    a:hover {
        transition:all 0.3s ease-in-out;
        background-color: rgba(0,0,0,0.1);
    }
`


export default Header
