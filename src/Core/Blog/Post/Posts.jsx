import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { API } from '../../../service/api'
import Post from './Post'

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category')

    useEffect(() => {
        const fetchData = async () => {
           let response =  await API.getAllPosts({category: category || ''});
           if(response.isSuccess)
                setPosts(response.data)
        }
        fetchData();
    
    }, [category])
    
    return (
        <>
            {
                posts && posts.length > 0 ? posts.map(post => (
                    <Grid item lg= {3} xs={12}>
                        <Link to={`/details/${post._id}`} style={{textDecoration: "none", color: "inherit"}}>
                            <Post post={post}/>
                        </Link>
                    </Grid>
                )) : 
                <Box style={{color: '#878787', margin: '30px 80px', fontsize: 18 }}>No post to display </Box>
            }
        </>
      )
  
}

export default Posts