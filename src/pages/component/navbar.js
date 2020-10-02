import React from 'react'
import '../../css/navbar.css'
import img_avatar from '../../img/img_avatar.png'
import '../../font/SFCompactDisplay-Bold.ttf'

function navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <button className="btn btn-primary d-lg-none" id="menu-toggle"><i className="fa fa-arrows-h" aria-hidden="true"></i></button>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarText">
       <ul className="navbar-nav mr-auto">
         <li className="nav-item active">
          <div className="nav-link nav_input_icon" href="/">&nbsp;<input type="text" className="nav_input" placeholder="Search Project" /></div>
         </li>
        </ul>

    <ul className="navbar-nav mr-lg-5">
    <li className="nav-item mx-lg-3">
        <a className="nav-link nav_text" href="/">
        <span className="avatar_online"></span><img src={img_avatar} alt="Avatar" className="avatar mr-2" />Angelina Doe<span className="blue_box ml-1"></span></a>
      </li>
      <li className="nav-item mx-lg-3">
      <a className="nav-link box-org" href="/"><span></span></a>
      </li>
      <li className="nav-item mx-lg-3">
        <a className="nav-link box-purp" href="/"><span></span></a>
      </li>
      
      <li className="nav-item mx-lg-3">
        <a className="nav-link" href="/"></a>
      </li>
      </ul>
  </div>
</nav>
        </div>
    )
}

export default navbar
