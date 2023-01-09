import { Grid } from '@mui/material'
import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import Posts from './Post/Posts'


const BlogHome = () => {
  return (
    <>
    <Banner />
            <Grid container>
                <Grid item lg={2} xs={12} sm={2}>
                    <Categories />
                </Grid>
                <Grid container item xs={12} sm={10} lg={10}>
                    <Posts />
                </Grid>
            </Grid>
    </>
  )
}

export default BlogHome