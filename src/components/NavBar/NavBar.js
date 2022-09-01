import React from 'react'
import './NavBar.css'
import{useNavigate} from 'react-router-dom'


function NavBar(props) {
  const navigate = useNavigate()
  function handleclick(id){
    if(id==='genres')
    navigate('/Genres')
    else if(id==='home')
    navigate('/')
  }
  return (
    <div className='navbar'>
      <img onClick={()=>handleclick('home')} className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix" />
      <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
      { props.route !== 'genres' && <h3  onClick={()=>handleclick('genres')}>Genres</h3>}
    </div>
  )
}

export default NavBar
