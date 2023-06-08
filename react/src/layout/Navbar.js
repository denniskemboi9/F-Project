import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function Navbar() 
{

  const {currentUser, logout} = useContext(AuthContext)  


  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-primary mt-4">
    <div className="container">
    <a className="navbar-brand fw-bolder" href="/"><h2>Poem App</h2></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

    <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
        </li>

        <li className="nav-item">
          <Link to="/search" className="nav-link active" >Search</Link>
        </li>


        {currentUser?
        <>

        <li className="nav-item">
          <Link to="/newpoem" className="nav-link active" >New poem</Link>
        </li>

        <li className="nav-item dropdown">
          <Link to="/profile" className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Profile</Link>          
          <ul className="dropdown-menu">
            <li><Link to="/profile" className="dropdown-item" href="#">{currentUser && currentUser.username}</Link></li>

            {/* <li><hr className="dropdown-divider" /></li> */}
            <li><a className="dropdown-item" onClick={() => logout()}>Logout</a></li>
          </ul>
        </li>

        </>
        :
        <>

        <li className="nav-item">
          <Link to="/login" className="nav-link active" >Login</Link>
        </li>

        <li className="nav-item">
         <Link to="/register" className='nav-link active'>Register</Link>
        </li>

        </>

        }

        
       
      </ul>

    </div>
  </div>
</nav>
</div>


  )
}
