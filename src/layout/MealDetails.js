import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {properties} from "../properties";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Nutrition from "./Nutrition";


const Meal = styled.div`
margin: 40px;
padding: 20px;
background-color: #c7eeb2;
border-radius: 20px;
`

const Title = styled.h1`
  text-align: center;
  margin-top: 20px;
  font-family: 'Kaushan Script', cursive;
`

const Image = styled.img`
border-radius: 20px;
width: auto;
height: auto;
`

const Table = styled.table`
  margin: 40px;
  width: 80%;
  border: solid #d1d1d1;

`

const Button = styled.button`
  margin: 20px;
 
`


function MealDetails(props) {

    let id = props.match.params.id;

    const [mealSummary, setMealSummary] = useState({});
    const [mealIngredients, setMealIngredients] = useState([]);
    const [mealPicture, setMealPicture] = useState("");

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/${id}/summary?apiKey=${properties.forthKey}`)
            .then(response => {
                setMealSummary(response.data)
            })
        axios.get(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${properties.forthKey}`)
            .then(response => {
                setMealIngredients(response.data.ingredients)
            })
        axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${properties.forthKey}&includeNutrition=false`)
            .then(response => {
                setMealPicture(response.data.image)
                console.log(response.data.image)
            })
    }, [id])

    const customStyles = {
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)',
            width                 : '20%'
        }
    };

    let subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '#070101';
    }

    function closeModal(){
        setIsOpen(false);
    }

    return (
        <>
            <Title>{mealSummary.title}</Title><br/>

            <div>
                <Link to={`${id}/recipe`}>
                    <Button type="button" className="btn btn-outline-success">Get Recipe</Button>
                </Link>
                <Button onClick={openModal} type="button" className="btn btn-outline-success">See Nutrition Values</Button>
            </div>

            <Meal dangerouslySetInnerHTML={{ __html: mealSummary.summary }} />

            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <Table className="table table-striped table-light">
                            <thead className="table-warning">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Amount</th>
                            </tr>
                            </thead>

                            <tbody>
                            {mealIngredients.map((ingredient, index) => {
                                return <tr>
                                    <th scope="row">{index}</th>
                                    <td>{ingredient.name}</td>
                                    <td>{ingredient.amount.metric.value} g</td>
                                </tr>
                            })}
                            </tbody>
                        </Table>
                    </div>

                    <div className='col'>
                        <Image src={mealPicture} alt="mealpicture"/>
                    </div>
                </div>
            </div>

            <div>
                <Modal
                    scrollable={true}
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <h2 ref={_subtitle => (subtitle = _subtitle)}>Nutrition Facts</h2>


                    <Nutrition mealId={id}/>

                    <button onClick={closeModal} type="button" className="btn btn-primary">close</button>
                </Modal>
            </div>


        </>
    );
}

export default MealDetails;