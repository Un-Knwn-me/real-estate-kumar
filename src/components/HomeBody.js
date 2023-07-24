import { Box, Card, CardMedia, Fab, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const HomeBody = () => {
  return (
    <div>
        <div className='card-body'>
        <Box sx={{ mt: 1 }} >
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column", bgcolor: "#F1F4E6ff" }} elevation={24}>
                <br/><br/>
                <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={12}>
                       <Typography variant='h4'>FOR ALL TASTES AND ALL DESIRES</Typography>
                       <Typography variant='h5' color={'#381F16ff'} sx={{fontWeight: 'bolder' }}>________</Typography> 
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <div className='image-collage' >
  <Card >
    <Grid container spacing={0} sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
      <Grid item xs={5} md={5} lg={5}>
        <CardMedia
          sx={{ height: 250 }}
          image="https://images.pexels.com/photos/1725385/pexels-photo-1725385.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="1"
        />
      </Grid>
      <Grid item xs={2} md={2} lg={2}>
        <CardMedia
          sx={{ height: 250 }}
          image="https://images.pexels.com/photos/7005274/pexels-photo-7005274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="2"
        />
      </Grid>
      <Grid item xs={5} md={5} lg={5}>
        <CardMedia
          sx={{ height: 250 }}
          image="https://images.pexels.com/photos/5825371/pexels-photo-5825371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="2"
        />
      </Grid>

      <Grid item xs={4} md={4} lg={4}>
        <CardMedia
          sx={{ height: 250 }}
          image="https://images.pexels.com/photos/5824495/pexels-photo-5824495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="1"
        />
      </Grid>
      <Grid item xs={4} md={4} lg={4}>
        <CardMedia
          sx={{ height: 250 }}
          image="https://images.pexels.com/photos/7534294/pexels-photo-7534294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="2"
        />
      </Grid>
      <Grid item xs={4} md={4} lg={4}>
        <CardMedia
          sx={{ height: 250 }}
          image="https://images.pexels.com/photos/7533759/pexels-photo-7533759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="2"
        />
      </Grid>

      <Grid item xs={3} md={3} lg={3}>
        <CardMedia
          sx={{ height: 250 }}
          image="https://images.pexels.com/photos/7031881/pexels-photo-7031881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="1"
        />
      </Grid>
      <Grid item xs={3} md={3} lg={3}>
        <CardMedia
          sx={{ height: 250 }}
          image="https://images.pexels.com/photos/6782568/pexels-photo-6782568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="2"
        />
      </Grid>
      <Grid item xs={3} md={3} lg={3}>
        <CardMedia
          sx={{ height: 250 }}
          image="https://images.pexels.com/photos/6890403/pexels-photo-6890403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="3"
        />
      </Grid>
      <Grid item xs={3} md={3} lg={3}>
        <CardMedia
          sx={{ height: 250 }}
          image="https://images.pexels.com/photos/6933769/pexels-photo-6933769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="4"
        />
      </Grid>
    </Grid>
  </Card></div>
</Grid>
</Grid>
    <br/><br/><br/><br/>
    <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={12}>
                       <Typography variant='h4'>About</Typography>
                       <Typography variant='h5' color={'#381F16ff'} sx={{fontWeight: 'bolder' }}>___</Typography> 
                  </Grid>
                  <Grid item xs={12} md={12} lg={12} sx={{ ml: 8, mr: 8 }}>
                  <Grid item xs={12} md={12} lg={12}>
                       <Typography align="left">
                       At Kumar Real Estate, we take pride in offering a wide range of exceptional real estate services tailored to meet your diverse needs. Whether you're looking for a serene countryside escape, a vibrant urban dwelling, a beautiful beachside retreat, or a spacious corporate godown, we have the perfect property for you.
                       </Typography>
                      </Grid>
                      <br/>
                      <Grid item xs={12} md={12} lg={12}>
                       <Typography align="left">
                       For those seeking a piece of land to call their own, our extensive selection of land properties includes everything from tranquil countryside plots to strategically located commercial spaces. Our dedicated team of experts will assist you throughout the process, making buying or selling land a seamless and rewarding experience.
                       </Typography>
                      </Grid>
                      <br/>
                      <Grid item xs={12} md={12} lg={12}>
                       <Typography align="left">
                       Dreaming of finding your ideal home? Our portfolio of houses and apartments caters to all tastes and preferences. From cozy studios to luxurious penthouses, we are here to guide you every step of the way, making your buying, selling, or investing journey easy and stress-free.
                       </Typography>
                      </Grid>
                      <br/>
                      <Grid item xs={12} md={12} lg={12}>
                       <Typography align="left">
                       If you're a business owner in need of a spacious warehouse, a well-located storage facility, or a distribution center, our corporate godown properties are designed to optimize your operations. Our experienced team will ensure a smooth leasing or buying process, enabling you to focus on growing your business.
                       </Typography>
                      </Grid>
                      <br/>
                      <Grid item xs={12} md={12} lg={12}>
                       <Typography align="left">
                       Additionally, for aspiring farmers and agri enthusiasts, our agricultural land properties offer vast farmlands and fertile plots ready for cultivation. Let us help you realize your agricultural dreams, providing the perfect setting for a flourishing harvest.
                       </Typography>
                      </Grid>
                      <br/>
                      <Grid item xs={12} md={12} lg={12}>
                       <Typography align="left">
                       With Kumar Real Estate, you can count on personalized service, market expertise, and a proven track record. Reach out to us today, and together, we'll turn your real estate aspirations into a prosperous reality.
                       </Typography>
                      </Grid>


                    </Grid></Grid>
                    <br/><br/><br/>
                    <div className='contact'>
                    <Box display="flex" justifyContent="center">
                    <Grid container spacing={3} sx={{ width: '100%', justifyContent: 'center' }}>
                <Grid item xs={12} md={12} lg={12}>
                       <Typography variant='h4'>Reach Us!</Typography>
                       <Typography variant='h5' color={'#381F16ff'} sx={{fontWeight: 'bolder' }}>_____</Typography> 
                  </Grid>
                  
                  <Grid item xs={6} md={6} lg={6}>
                  <Box
          sx={{
            position: 'relative',
            width: '100%',
            paddingTop: { xs: '75%', sm: '56.25%', md: '75%', lg: '56.25%' },
            '& iframe': {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            },
          }}
        >
                     <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15668.345694085618!2d77.2396407!3d10.9568442!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9adfa6cbe8c4f%3A0x5dae1d6862d9568f!2sKUMAR%20REAL%20ESTATE!5e0!3m2!1sen!2sin!4v1690057088534!5m2!1sen!2sin"
            title="Google Map - Kumar Real Estate Location"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
                    </Box>
                    </Grid>
                    <Grid item xs={6} md={4} lg={4} sx={{ mr: 2, ml:2 }}>
                    <Typography variant='h5'>Contact !</Typography><br/><br/>
                    <Typography variant='button'>Phone No:- </Typography>
                    <a href='tel:+919842584714'>
                    <Typography color={"#000000"}> +91 98425 84714 </Typography></a>
                    <br/>
                    <Typography variant='button'>Address:- </Typography>
                    <Typography> 6/79, S Pillayar Kovil St,</Typography>
                    <Typography> unjapalaiyam, Kaniyur, </Typography>
                    <Typography> Anupatti, Tamil Nadu 641658 </Typography>
                    <br/>
                    <a href='https://wa.me/+919842584714'>
                    <Fab
            variant="extended"
            sx={{
              bgcolor: "#00e676",
              fontSize: { xs: '10px', sm: '14px', md: '16px' }, // Adjust the font size for different screen sizes
              p: { xs: '8px 16px', sm: '12px 24px', md: '16px 32px' }, // Adjust the padding for different screen sizes
            }}
          >
                    <WhatsAppIcon sx={{ mr: 1 }} />
                      Chat on WhatsApp
                    </Fab></a>
                    </Grid>
                    </Grid></Box>
                    </div><br/><br/>
    </Paper></Grid></Grid>
    </Box>
        </div>
    </div>
  )
}

export default HomeBody