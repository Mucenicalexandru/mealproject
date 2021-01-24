import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {properties} from "../properties";

const Input = styled.input`
  margin-top: 10px;
`

const Button = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 80px;
`

const Pagination = styled.button`
  margin : 20px;
  
`

const MealDetails = styled.p`
    font-family: 'Cabin Sketch', cursive;
    color: #50781b;
    border-style: double;
    border-radius: 10px;
    padding: 5px;
    width: 140px;
`

function Meals(props) {


    const [mealList, setMealList] = useState([]);
    const [ingredient, setIngredient] = useState('');
    const [page, setPage] = useState(0);

    const handleChange = (e) => {
        e.preventDefault();
        setIngredient(e.target.value);
    }

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${properties.forthKey}&query=${ingredient}&number=12&offset=${page}`)
            .then(response => {
                setMealList(response.data.results)
            })
    }, [page])


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${properties.forthKey}&query=${ingredient}&number=12&offset=${page}`)
            .then(response => {
                setMealList(response.data.results)
            })
    }

    function previousPage() {
        if (page > 0) {
            setPage(page - 10);
        }
    }

    function nextPage() {
        setPage(page + 10);
    }


    return (
        <>

            <div className="nav justify-content-center">
                <form onSubmit={handleSubmit}>
                    <Input className="form-control mr-sm-2" type="search" placeholder="Enter the ingredient" aria-label="Search" name="ingredient" value={ingredient} onChange={handleChange}/>
                    <Button className="btn btn-sm btn-outline-secondary" type="submit">Search</Button>
                </form>
            </div>


            <div className='row align-items-center'>
                {mealList.map((meal, index) => {
                    return <div className='col-sm-2'>
                        <div className="card" key={index}>
                            <img src={meal.image} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{meal.title}</h5>
                                <Link to={`/meal/${meal.id}`}><MealDetails key={index}>See meal details</MealDetails></Link>
                            </div>
                        </div>
                    </div>
                })}
            </div>

            <div>
                    <Pagination onClick={previousPage} className="btn btn-outline-success">
                        Previous
                    </Pagination>

                    <Pagination onClick={nextPage} className="btn btn-outline-success">
                        Next
                    </Pagination>

            </div>


        </>

    );
}

export default Meals;