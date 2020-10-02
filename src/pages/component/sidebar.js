import React from 'react'
import '../../css/sidebar.css'
import img_avatar from '../../img/img_avatar.png'

function sidebar() {
    return (
        <div>
            {/* <!-- Sidebar --> */}
<div className="bg-white" id="sidebar-wrapper">
  <div className="sidebar-heading"><a className="navbar-brands mx-lg-5" href="/">blueBox</a></div>
  <div className="list-group list-group-flush mt-5 px-5">
    <div className="sidebar_icon list-group-item-action bg-white"><img src={img_avatar} alt="Avatar" className="avatar mr-2" /><div className="sidebar_icon_text">AngelinaDoe</div><br /><div className="sidebar_icon_sm_text"><br />ProjectManager</div></div>
     
    <a href="/" className="list-group-item-action bg-white fm mt-4 pt-2 mb-2 dashboard">Dashboard
    <span></span></a>
    <a href="/" className="list-group-item-action sb-list bg-white fm my-2">Overview<span></span></a>
    <a href="/" className="list-group-item-action sb-list bg-white fm my-2">Comonents<span></span></a>
    <a href="/" className="list-group-item-action sb-list bg-white fm my-2">Forms<span></span></a>
    <a href="/" className="list-group-item-action sb-list bg-white fm my-2">Stuff<span></span></a>
    <a href="/" className="list-group-item-action sb-list bg-white fm my-2">Data Table<span></span></a>
    <a href="/" className="list-group-item-action sb-list bg-white fm my-2">Icons<span></span></a>
    <a href="/" className="list-group-item-action sb-list bg-white fm my-2">Sample Page<span></span></a>
    <a href="/" className="list-group-item-action sb-list bg-white fm my-2">Extra<span></span></a>
  

  <div className="tbtn mx-auto mt-4">Add Project</div>
  </div>
</div>
{/* <!-- /#sidebar-wrapper --> */}
        </div>
    )
}

export default sidebar
