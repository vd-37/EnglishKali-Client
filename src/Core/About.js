import React from 'react'
import alphabets from "../assets/alphabets.jpg"
const About = () => {
  return (
    <div className='about'>
        <h1 className='aboutHeading'>Learning made super easy by <br/>EnglishKali.com</h1>
        <div className='aboutContainer'>
            <div className='aboutContent'>
                <h1 className='step'>Step 1</h1>
                <h2>Learn Alphabets</h2>
                <br />
                <br />
                <h5>Thoroughly understand the concepts of <br/> vowels and consonants</h5>
                <button type="button" className="btn btn-light btn-lg">Start Learning</button>
            </div>
            <div className='aboutImage'>
                <img className='imageAbout' src={alphabets} alt="Alphabets images"></img>
            </div>
        </div>

        <div className='aboutContainer'>
            
            <div className='aboutImage'>
                <img className='imageAbout' src={alphabets} alt="Alphabets images"></img>
            </div>
            <div className='aboutContent'>
                <h1 className='step'>Step 2</h1>
                <h2>Learn Parts of Speech</h2>
                <br />
                <br />
                <h5>Thoroughly understand the concepts of <br/> vowels and consonants</h5>
                <button type="button" className="btn btn-light btn-lg">Start Learning</button>
            </div>
        </div>


        <div className='aboutContainer'>
            <div className='aboutContent'>
                <h1 className='step'>Step 3</h1>
                <h2>Learn Tenses</h2>
                <br />
                <br />
                <h5>Thoroughly understand the concepts of <br/> vowels and consonants</h5>
                <button type="button" className="btn btn-light btn-lg">Start Learning</button>
            </div>
            <div className='aboutImage'>
                <img className='imageAbout' src={alphabets} alt="Alphabets images"></img>
            </div>
        </div>


        <div className='aboutContainer'>
        <div className='aboutImage'>
                <img className='imageAbout' src={alphabets} alt="Alphabets images"></img>
            </div>
            <div className='aboutContent'>
                <h1 className='step'>Step 4</h1>
                <h2>Learn Articles</h2>
                <br />
                <br />
                <h5>Thoroughly understand the concepts of <br/> vowels and consonants</h5>
                <button type="button" className="btn btn-light btn-lg">Start Learning</button>
            </div>
            
        </div>
    </div>
  )
}

export default About