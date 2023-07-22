import { Box, Card, CardMedia, Grid, Paper } from '@mui/material'
import React from 'react'

const HomeBody = () => {
  return (
    <div>
        <div className='card-body'>
        <Box sx={{ mt: 1 }} >
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column", bgcolor: "#F1F4E6ff"}} elevation={24}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={12} lg={12}>
        <Card sx={{ maxWidth: 1000 }}>
            <Grid container spacing={0}>
            <Grid item xs={5} md={5} lg={5}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://images.pexels.com/photos/1725385/pexels-photo-1725385.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="1"
      /></Grid>
      <Grid item xs={2} md={2} lg={2}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://images.pexels.com/photos/7005274/pexels-photo-7005274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="2"
      /></Grid>
      <Grid item xs={5} md={5} lg={5}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://images.pexels.com/photos/5825371/pexels-photo-5825371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="2"
      /></Grid>

<Grid item xs={5} md={5} lg={5}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://images.pexels.com/photos/1725385/pexels-photo-1725385.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="1"
      /></Grid>
      <Grid item xs={2} md={2} lg={2}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://images.pexels.com/photos/7005274/pexels-photo-7005274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="2"
      /></Grid>
      <Grid item xs={5} md={5} lg={5}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://images.pexels.com/photos/5825371/pexels-photo-5825371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="2"
      /></Grid>

<Grid item xs={5} md={5} lg={5}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://images.pexels.com/photos/1725385/pexels-photo-1725385.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="1"
      /></Grid>
      <Grid item xs={2} md={2} lg={2}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://images.pexels.com/photos/7005274/pexels-photo-7005274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="2"
      /></Grid>
      <Grid item xs={5} md={5} lg={5}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://images.pexels.com/photos/5825371/pexels-photo-5825371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="2"
      /></Grid>
      </Grid>
    </Card>
    </Grid></Grid></Paper></Grid></Grid></Box>
        </div>
    </div>
  )
}

export default HomeBody