import React, { useEffect, useState } from 'react'
import './Genres.css'
import axios from '../../constants/axios'
import { API_KEY } from '../../constants/constants';
import { useNavigate } from 'react-router-dom'

function Genres(props) {

    const Navigate = useNavigate()
    const [genres, setGenres] = useState([]);
    useEffect(() => {


        axios.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`).then((response) => {
            setGenres(response.data.genres)
        })



    }, [props]);
    const genreClick = id => {


        Navigate(`/genre`, { state: { id: id } })
    }
    return (
        <div className='App'>
            <div className='genres'>
                {genres.map((obj, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => { genreClick(obj.id) }}
                            className='genres-posters'>
                            <h3>{obj.name}</h3>
                        </div>)
                })}



            </div>
        </div>
    )
}

export default Genres

