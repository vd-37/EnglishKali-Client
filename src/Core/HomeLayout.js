import React from 'react'
import { Link } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <div className="container-fluid bg padding"> 
        <div className="col-lg-6 col-md-8 col-sm-12 content ">
            <h1 className='homeHeading'>Learn English  <br />through Kannada.</h1>
            <h5 className='homeDesc'>Use our comprehensive lessons, conversation topics, and <br/> more to explore a world of oppurtunities</h5>
            <Link to="blogs"><button type="button" className="btn btn-outline-light btn-lg">Start Learning</button></Link>
        </div>
</div>
  )
}

export default HomeLayout