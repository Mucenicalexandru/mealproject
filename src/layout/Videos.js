import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {properties} from "../properties";
import styled from "styled-components";
import YouTube from 'react-youtube';


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

const VideoTitle = styled.h5`
  text-align: center;
  margin-top: 20px;
  font-family: 'Fredericka the Great', cursive;
  color: #045762;
`

function Videos(props) {

    const [videos, setVideos] = useState([]);
    const [ingredient, setIngredient] = useState('');
    const [page, setPage] = useState(0);

    const handleChange = (e) => {
        e.preventDefault();
        setIngredient(e.target.value);
    }

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/food/videos/search?apiKey=${properties.forthKey}&query=${ingredient}&number=12&offset=${page}`)
            .then(response => {
                setVideos(response.data.videos)
            })
    }, [page])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://api.spoonacular.com/food/videos/search?apiKey=${properties.forthKey}&query=${ingredient}&number=12&offset=${page}`)
            .then(response => {
                setVideos(response.data.videos)
            })
    }

    //Youtube video option
    const opts = {
        height: '300',
        width: '440',
        playerVars: {
            autoplay: 0,
        }
    };

    function previousPage() {
        if (page > 0) {
            setPage(page - 10);
        }
    }

    function nextPage() {
        setPage(page + 10);
    }

    const pagination = <div>
        <Pagination onClick={previousPage} className="btn btn-outline-success">
            Previous
        </Pagination>
        <Pagination onClick={nextPage} className="btn btn-outline-success">
            Next
        </Pagination>
    </div>

    const noPagination = <div> </div>

    return (
        <>

            <div className="nav justify-content-center">
                <form onSubmit={handleSubmit}>
                    <Input className="form-control mr-sm-2" type="search" placeholder="Enter the ingredient" aria-label="Search" name="ingredient" value={ingredient} onChange={handleChange}/>
                    <Button className="btn btn-sm btn-outline-secondary" type="submit">Search</Button>
                </form>
            </div>

            <div className='row align-items-center'>
            {videos.map((vid, index) => {
                return <div  className='col-sm-3'>
                    <VideoTitle>{vid.title}</VideoTitle>
                    <YouTube videoId={vid.youTubeId} opts={opts}  />
                   <p>Length : {Math.floor(vid.length % 3600 / 60)}:{Math.floor(vid.length % 3600 % 60)} min</p>
                </div>
            })}
            </div>

            {videos.length > 0 ? pagination : noPagination }


        </>
    );
}

export default Videos;