import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from "styled-components";
import {properties} from "../properties";

const MealDescription = styled.div`
    margin: 40px;
    padding: 20px;
    background-color: #c7eeb2;
    border-radius: 20px;
`

const Image = styled.img`
    max-width: 100%;
    width: auto;
    height: auto;
    border-radius: 20px;
`

const Title = styled.h1`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: 'Kaushan Script', cursive;

`

function Random(props) {

    const [randomMeal, setRandomMeal] = useState([{}]);

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${properties.forthKey}`)
            .then(response => {
                setRandomMeal(response.data.recipes[0])
            })
    }, [] )



    return (
        <>


            <Title>{randomMeal.title}</Title>

            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <MealDescription dangerouslySetInnerHTML={{__html: randomMeal.summary}}/>
                    </div>
                    <div className='col'>
                        <Image src={randomMeal.image} alt=""/>
                    </div>
                </div>
            </div>



            </>
    );
}

export default Random;