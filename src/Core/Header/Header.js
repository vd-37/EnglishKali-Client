import { AppBar, Toolbar, styled} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import App from '../../App'
import Logo from '../../assets/Logo.jpeg'
import Quill from '../QuillDemo/Quill'
const Component = styled(AppBar)`
    background: #EEEEEE;
    color: #000;
    flex-direction: row;
    justify-content: space-between
`
const Container = styled(Toolbar)`
    justify-content: right;
    & > a {
        padding: 20px;
        color: #6B728E;
        text-decoration: none;
    }
    & > a:hover{
        color: #E38B29
    }
`
const Image = styled(Toolbar)`
    justify-content: left;
    padding-left: 2em;
`

const Header = () => {
  return (
    <Component>
        <Image>
            <Link to="/"><img src={Logo} alt="Website logo" style={{"height": "50px"}}></img></Link>
        </Image>
        <Container>
            <Link to='/'>HOME</Link>
            <Link to='/about'>ABOUT US</Link>
            <Link to='/blogs'>LESSONS</Link>
            <Link to='/contact'>CONTACT</Link>
            <Link to='/quill'>Quill</Link>
            <Link to='/login'>LOGOUT</Link>
        </Container>
    </Component>
  )
}

export default Header