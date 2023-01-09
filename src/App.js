import { Box } from "@mui/material";
import React, { useState } from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import DataProvider from "./context/DataProvider";
import Login from "./Core/Account/Login";
import BlogHome from "./Core/Blog/BlogHome";
import CreatePost from "./Core/Blog/Create/CreatePost";
import UpdatePost from "./Core/Blog/Create/UpdatePost";
import DetailView from "./Core/Blog/Details/DetailView";
import Header from "./Core/Header/Header";
import { Home } from "./Core/Home";

const PrivateRoute = ({isAuthenticated, ...props}) => {
  return isAuthenticated ? 
  <>
    <Header />      
    <Outlet />
  </> : 
    <Navigate replace to="/login" />    
}

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false)
  return (
    <DataProvider>
      <BrowserRouter>
      <Box style={{marginTop: 64}}>
      <Routes>
        <Route path="/login" element={<Login isUserAuthenticated={isUserAuthenticated}/>} />
        <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogHome />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/details/:id" element={<DetailView />} />
          <Route path="/update/:id" element={<UpdatePost />} />
        </Route>
       </Routes>
       </Box>
    </BrowserRouter>
    </DataProvider>
  );
}

export default App;
