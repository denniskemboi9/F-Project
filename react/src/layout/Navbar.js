import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() 
{
  return (
    <div>
<nav class="navbar navbar-expand-lg bg-white mt-4">
  <div class="container">
    <a class="navbar-brand fw-bold" href="#">Poem App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/" class="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/addblog" class="nav-link active" >Add Poem</Link>
        </li>
        <li class="nav-item">
          <Link to="/search" class="nav-link active" >Search</Link>
        </li>
        <li class="nav-item dropdown">
          <Link to="/profile" class="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Profile
          </Link>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Current User</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
          </ul>
        </li>
       
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>
  )
}
