import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from "styled-components";
import {properties} from "../properties";

const WineDescription = styled.div`
margin: 40px;
padding: 20px;
background-color: #c7eeb2;
border-radius: 20px;
`

const FoodPairing = styled.div`
margin: 40px;
font-family: 'Sedgwick Ave', cursive;
font-size: 40px;
text-shadow: 2px 2px #c7eeb2;
`

function WineDetails(props) {

    let wineName = props.match.params.name;


    const [wineDetails, setWineDetails] = useState("");
    const [wineFoodPairing, setWineFoodPairing] = useState([]);
    const [wineError, setWineError] = useState("");

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/food/wine/description?apiKey=${properties.forthKey}&wine=${wineName}`)
            .then(response => {
                setWineDetails(response.data.wineDescription);
            })

        axios.get(`https://api.spoonacular.com/food/wine/dishes?apiKey=${properties.forthKey}&wine=${wineName}`)
            .then(response => {
                if(response.data.status === "failure"){
                    setWineError(response.data.message);
                }else{
                    setWineFoodPairing(response.data.pairings);
                }

            })
    }, [wineName])


    return (
        <>

            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <WineDescription>Description : {wineDetails}</WineDescription>
                    </div>
                    <div className='col'>
                        <div>
                            <FoodPairing>
                                {wineError.length < 2 ? wineFoodPairing.map((food, index) => {
                                    return <p key={index}>{food.charAt(0).toUpperCase() + food.slice(1)}</p>
                                }) : wineError.replace("_", " ")}
                            </FoodPairing>
                        </div>
                    </div>
                </div>
            </div>




        </>



    );
}

export default WineDetails;