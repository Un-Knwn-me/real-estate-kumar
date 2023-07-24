import { AppBar, Box, Card, CardActionArea, CardContent, CardMedia, Grid, Paper, Toolbar, Typography } from '@mui/material'
import React from 'react'

const properties = [
  {
    imageUrl: "https://images.pexels.com/photos/2032110/pexels-photo-2032110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    altText: "Land Property",
    title: "Land Property",
    description: "Discover the ideal piece of land with Kumar Real Estate Agency. Whether you desire a serene countryside escape, a strategic commercial plot, or a scenic location for your dream home, we have an extensive selection of land properties to suit your needs. Our dedicated team of experts will assist you throughout the process, making buying or selling land a seamless experience. Let's turn your vision into reality!",
  },
  {
    imageUrl: "https://images.pexels.com/photos/12196687/pexels-photo-12196687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    altText: "House Property",
    title: "House Property",
    description: "Find your perfect home with Kumar Real Estate Agency. Whether you want a peaceful retreat, a lively city space, or a beautiful beachside getaway, we have a wide range of homes and offices for you to choose from. Our experienced team will guide you every step of the way, making the buying, selling, or investing process easy and hassle-free. Let's make your real estate dreams come true!",
  },
  {
    imageUrl: "https://images.pexels.com/photos/3656188/pexels-photo-3656188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    altText: "Apartment Buildings",
    title: "Apartment Buildings",
    description: "Discover the perfect apartment with Kumar Real Estate Agency Name. Whether you seek a cozy studio, a spacious family home, or a luxurious penthouse, we have an impressive range of apartments to match your preferences. Our experienced team will guide you through the process, ensuring a smooth and stress-free buying or selling experience. Let's find your ideal apartment and make it your new home sweet home!",
  },
  {
    imageUrl: "https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    altText: "Godown Property",
    title: "Godown Property",
    description: "Discover the ideal corporate godown property with Kumar Real Estate Agency. Whether you require a spacious warehouse, a strategically located storage facility, or a distribution center, we have an extensive selection of godown properties to meet your business needs. Our experienced team will assist you throughout the process, making buying or leasing a corporate godown a seamless experience. Let's find the perfect space to optimize your business operations!",
  },
  {
    imageUrl: "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    altText: "Agri-Land Property",
    title: "Agri-Land Property",
    description: "Discover the perfect agricultural land with Kumar Real Estate Agency. Whether you're looking for vast farmlands, fertile plots for cultivation, or serene rural retreats, we have an extensive selection of agri land properties to suit your farming needs. Our experienced team will guide you through the process, making buying or selling agri land a seamless experience. Let's cultivate your agricultural dreams into a prosperous reality!",
  },
  {
    imageUrl:"https://images.pexels.com/photos/7245333/pexels-photo-7245333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    altText:"Industrial Property",
    title: "Industrial Property",
    description: " Explore our wide range of industrial buildings with Kumar Real Estate Agency. Whether you need a manufacturing plant, a warehouse, or a factory space, we have an impressive selection of industrial buildings to cater to your specific business requirements. Our experienced team will guide you through the process, ensuring a smooth and efficient buying or leasing experience. Let's find the perfect industrial space to take your business to new heights!"
  }
];


const HomeTop = () => {
  return (
    <div>
        <div className='navbar'>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background: '#817140ff'}}>
        <Toolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1, color: "#F1F4E6ff" }}>
            Kumar Real Estate
          </Typography>
         </Toolbar>
        <Typography variant='button' color={'#381F16ff'} sx={{ color: "#F1F4E6ff", textAlign: "right" }}>Contact: +91 98425 84714</Typography>
      </AppBar>
    </Box>
        </div>
        <div className='card'>
        <Card sx={{ maxWidth: 1500 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="500"
        image="https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
    </Card>
        </div>
        <div className='contont-top'>
        <Box sx={{ mt: 1 }} >
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column", bgcolor: "#F1F4E6ff"}} elevation={0}>
              <br/><br/><br/>
                  <Grid item xs={12} md={12} lg={12}>
                       <Typography variant='h3'>Our services</Typography> 
                       <Typography variant='h5' color={'#381F16ff'} sx={{fontWeight: 'bolder' }}>________</Typography>
                  </Grid>
                  <br/><br/>
                  <Grid container spacing={2}>
      {properties.map((property, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="160"
                  image={property.imageUrl}
                  alt={property.altText}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {property.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {property.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </Grid>
      ))}
    </Grid>                  
                  
                  </Paper></Grid></Grid></Box>
        </div>
    </div>
  )
}

export default HomeTop