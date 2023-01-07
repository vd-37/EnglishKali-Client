import React, { useContext, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Logo from "../../assets/Logo.jpeg";
import { API } from "../../service/api";
import { DataContext } from "../../context/DataProvider";
import { useNavigate } from "react-router-dom";


//Here the styled Box tag will be used as Component
//When passing html elements instead of MUI elements in styled tag, pass them as strings and write css in an object inside ()
const Component = styled(Box)`
  width: 25rem;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0, 0, 0, 0.5);
  border-radius: 30px;
  margin-top: 10vh;
`

const Image = styled("img")({
  width: "100px",
  display: "flex",
  margin: "auto",
  padding: "20px 0",
});

const Wrapper  = styled(Box)`
   padding: 35px 20px;
   display: flex;
   flex-direction: column;
   & > div, & > button{
    margin-top: 20px
   }
   & > p{
    margin: 20px auto;
    margin-bottom: 0
   }
`

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6261;
`

const LoginButton = styled(Button)`
  text-transform: none;
  color: #fff;
  background: #E38B29;
  box-shadow: 0 2px 4px 0 rgb(0,0,0,0.3);

`
const Text = styled(Typography)`
  color: #878787
`

const SignupButton = styled(Button)`
  text-transform: none;
  color: #E38B29;
  box-shadow: 0 2px 4px 0 rgb(0,0,0,0.3);
`

const signupInitialValues = {
  name: '',
  email: '',
  password: '',
}

const loginInitialValues = {
  email: '',
  password: '',
}

const Login = ({isUserAuthenticated}) => {
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [account, toggleAccount] = useState('login');
  const [error, setError] = useState('');

  const { setAccount } = useContext(DataContext)
  const navigate = useNavigate()

  const onInputChange = (e) => {
    setSignup({...signup, [e.target.name]: e.target.value});
    // console.log(signup);
  }

  const onValueChange = (e) => {
    setLogin({...login, [e.target.name]: e.target.value});
    console.log(login);
  }
  
  const signupUser = async () => {
    let response = await API.userSignup(signup);
    if (response.isSuccess) {
        setError('');
        setSignup(signupInitialValues);
        toggleAccount('login');
    } else {
        setError('Something went wrong! please try again later');
    }
  }

  const loginUser = async () => {
    let response = await API.userLogin(login);
    if(response.isSuccess){
      setError('')
      sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`)
      sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`)

      setAccount({name: response.data.name, email: response.data.email})
      isUserAuthenticated(true)
      navigate('/');
    }
    else{
      setError('Invalid credentials, please check username and password');
    }
  }

const toggleSignup = () => {
  account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
}

  return (
    <Component>
            <Box>
                <Image src={Logo} alt="blog" />
                {
                    account === 'login' ?
                        <Wrapper>
                            <TextField variant="standard" value={login.email} onChange={(e) => onValueChange(e)} name='email' label='Enter Email' />
                            <TextField variant="standard" value={login.p} onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />

                            {error && <Error>{error}</Error>}

                            <LoginButton variant="contained" onClick={() => loginUser()}>Login</LoginButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <SignupButton onClick={() => toggleSignup()} style={{ marginBottom: 50 }}>Create an account</SignupButton>
                        </Wrapper> :
                        <Wrapper>
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='name' label='Enter Name' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label='Enter email' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />

                            <SignupButton onClick={() => signupUser()} >Signup</SignupButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <LoginButton variant="contained" onClick={() => toggleSignup()}>Already have an account</LoginButton>
                        </Wrapper>
                }
            </Box>
        </Component>
  );
};

export default Login;
