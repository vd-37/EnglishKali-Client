import React from 'react'
import logo from '../assets/Logo.jpeg'

const Menu = () => {
  return (
    <>
  <nav className="navbar navbar-expand-md  navbar-light bg-light sticky-top" >
	  <div className="container-fluid menu">
    
		<a className="navbar-brand" href="/"><img className='logo' alt = "logo" src={logo}/></a>
    <button type="button" class="navbar-toggler" data-toggle="collapse" 
			data-target= "#navbarResponsive">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse rightMenu" id="navbarResponsive">
			<ul className="navbar-nav ml-auto">
				<li className="nav-item active">
					<a href="#home" className="nav-link">Home</a>
				</li>
				<li className="nav-item">
					<a href="#about" className="nav-link">About Us</a>
				</li>
				<li className="nav-item">
					<a href="#services" className="nav-link">Lessons</a>
				</li>
				<li className="nav-item">
					<a href="#team" className="nav-link">Log in</a>
				</li>
			</ul>
		</div>
	</div>

</nav>
    </>
  )
}

export default Menu