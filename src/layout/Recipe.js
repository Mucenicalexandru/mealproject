import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from "styled-components";
import {properties} from "../properties";

const Table = styled.table`
  margin: 40px;
  width: 80%;
  border: solid #d1d1d1;
`
function Recipe(props) {

    let id = props.match.params.id;

    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${properties.forthKey}&includeNutrition=false`)
            .then(response => {
                setRecipe(response.data.extendedIngredients);
            })
    }, [id]);


    return (
        <>
            <div className='container'>


            <Table className="table table-striped table-light">
                <thead className="table-warning">
                <tr>
                    <th scope="col">Aisle</th>
                    <th scope="col">Name</th>
                    <th scope="col">Amount</th>

                    <th scope="col">Unit</th>
                </tr>
                </thead>

                <tbody>
                {recipe.map((item, index) =>{
                    return <tr key={index}>
                                <th>{item.aisle}</th>
                                <td>{item.name}</td>
                                <td>{item.amount + " " + item.measures.metric.unitLong}</td>
                                <td>{item.unit}</td>
                            </tr>
                })}


                </tbody>
            </Table>
            </div>
        </>
    );
}

export default Recipe;