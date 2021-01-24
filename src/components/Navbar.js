import React from 'react';
import styled from 'styled-components';

const NavStyle = styled.div`
  background-color: #287ed9;
`
function Navbar(props) {


    return (
        <NavStyle>

            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link" id="meals" href="/meal" style={{"color": "white"}}
                       onMouseOver={() => {
                        document.querySelector(`#meals`).style.backgroundColor = "#144d86";
                        document.querySelector(`#meals`).style.border = "none";
                        document.querySelector(`#meals`).style.borderRadius = "10px";
                    }} onMouseOut={() => {
                        document.querySelector(`#meals`).style.backgroundColor = "#287ed9";
                    }}>Meals</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="random" href="/random" style={{"color": "white"}}
                       onMouseOver={() => {
                           document.querySelector(`#random`).style.backgroundColor = "#144d86"
                           document.querySelector(`#random`).style.border = "none";
                           document.querySelector(`#random`).style.borderRadius = "10px";
                       }}
                       onMouseOut={() =>
                           document.querySelector(`#random`).style.backgroundColor = "#287ed9"}>Random Meal</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="wine" href="/wine" style={{"color": "white"}}
                       onMouseOver={() => {
                           document.querySelector(`#wine`).style.backgroundColor = "#144d86"
                           document.querySelector(`#wine`).style.border = "none";
                           document.querySelector(`#wine`).style.borderRadius = "10px";
                       }} onMouseOut={() =>
                        document.querySelector(`#wine`).style.backgroundColor = "#287ed9"}>Wine</a>
                </li>
            </ul>

        </NavStyle>
    );
}

export default Navbar;