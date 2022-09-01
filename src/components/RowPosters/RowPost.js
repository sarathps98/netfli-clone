import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../constants/axios'
import { imageUrl } from '../../constants/constants';
import {useLocation } from 'react-router-dom'
function RowPost(props) {
    const location = useLocation()
    if(props.route==='genre'){
        var genreId = location.state.id
    }
    const [posters, setPosters] = useState([]);
    useEffect(() => {
       
        axios.get(`${genreId ? props.data + genreId : props.data }`).then((response)=>{
           console.log(response.data.results[0]);
            setPosters(response.data.results);
          })
    
        
    }, []);
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className= { genreId ? 'noscroll-posters' : 'posters'}>
            {posters.map((obj,index) =>
            <div>
                <img key={index} className= 'poster'  alt = 'posters' src={`${posters ? imageUrl +  obj.poster_path  : ''}`} />
            </div>
                
            )}
                
                
            </div>
        </div>
    )
}

export default RowPost