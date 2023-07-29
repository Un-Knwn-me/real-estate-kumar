import { AppBar, Box, Card, CardActionArea, CardContent, CardMedia, Fab, Grid, Paper, Toolbar, Typography } from '@mui/material'
import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SEO from './SEO';

const properties = [
  {
    imageUrl: "https://images.pexels.com/photos/2032110/pexels-photo-2032110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    altText: "Land Property",
    title: "Land Property",
    description: "Discover the ideal piece of land with Kumar Real Estate Agency. Whether you desire a serene countryside escape, a strategic commercial plot, or a scenic location for your dream home, we have an extensive selection of land properties to suit your needs. Our dedicated team of experts will assist you throughout the process, making buying or selling land a seamless experience. Let's turn your vision into reality!",
  },
  {
    imageUrl: "https://images.pexels.com/photos/12196687/pexels-photo-12196687.jpeg?auto=compress&cs=tinysrgb&w=3800&h=1600&dpr=1",
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
          <Typography fontFamily={"Georgia, serif;"} component="div" sx={{ flexGrow: 1, color: "#F1F4E6ff", fontSize: { xs: '26px', sm: '33px', md: '42px' } }}>
            Kumar Real Estate
          </Typography>
         </Toolbar>
        <Typography variant='button' color={'#381F16ff'} sx={{ color: "#F1F4E6ff", textAlign: "right", mr: 1, fontSize: { xs: '10px', sm: '14px', md: '14px' } }}>Contact: +91 98425 84714</Typography>
      </AppBar>
    </Box>
        </div>
        <div className='card'>
        <Card sx={{ maxWidth: "100%" }}>
        <Box position="relative">
        <CardMedia
          component="img"
          alt="green iguana"
          height="565"
          image="https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Typography
          component="div"
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            padding: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            color: '#fff',
            fontSize: { xs: '12px', sm: '18px', md: '30px' }
          }}
        ><header>
          Find Your Perfect Property with Kumar Real Estate Agency
          </header>
        </Typography>
      </Box></Card>
        </div>
        <SEO
        title="Welcome to Kumar Real Estate | Your Trusted Partner for Property Solutions"
        description="Discover your dream property with Kumar Real Estate. We offer a wide range of residential and commercial properties tailored to your needs. Buy, sell, or invest with confidence. Contact us today!"
      />

        <div className='contont-top'>
        <Box sx={{ mt: 1 }} >
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column", bgcolor: "#F1F4E6ff"}} elevation={0}>
              <Grid>
              <Box sx={{m: 10}}>
      <Typography variant='h4'>Who We Are</Typography><br/>
      <Typography  align="left" sx={{
            position: 'relative',
            width: '100%',
            ml:3,
          }}>
          At Kumar Real Estate, we are committed to helping you find your ideal property. Whether you are looking for a cozy home, a strategic commercial space, or a lucrative investment opportunity, we have an extensive selection of properties to suit your preferences. 
          </Typography>
          <Typography align="left" sx={{
            position: 'relative',
            width: '100%',
            ml:3,
          }}>
          Our experienced team of real estate experts is here to guide you through the buying, selling, or investing process, making it smooth and hassle-free. 
          Experience the joy of finding your dream property with us.
          </Typography>
          <br/><br/><br/>
      <Typography variant='h4'>Services Offered</Typography>
        <ul>
        <Typography align="left" sx={{
            position: 'relative',
            width: '100%',
          }}>
          <li>Residential Properties: Explore a variety of homes, apartments, and villas in sought-after locations. Find the perfect living space for you and your family.</li>
          <li>Commercial Properties: Discover strategic office spaces, retail shops, and industrial properties for your business needs. Boost your enterprise with the right location.</li>
          <li>Investment Opportunities: Unlock potential with our lucrative investment properties. Invest smartly for long-term gains and financial security.</li>
          </Typography>
        </ul>        
<br/><br/><br/>
      <Typography variant='h4'>Why Choose Us</Typography>
        <ul>
        <Typography align="left" sx={{
            position: 'relative',
            width: '100%',
          }}>
          <li>Extensive Property Listings: Our vast portfolio of properties ensures you'll find the perfect match for your requirements.</li>
          <li>Expert Guidance: Our dedicated team of real estate professionals is ready to assist you at every step, offering valuable insights and advice.</li>
          <li>Trustworthy Transactions: Count on us for transparent and secure transactions. Your satisfaction is our top priority.</li>
          <li>Local Market Knowledge: With years of experience in the real estate market, we have an in-depth understanding of the local trends and opportunities.</li>
          </Typography>
        </ul>        
        </Box>
                </Grid>
                <br/>
                  <Grid item xs={12} md={12} lg={12}>
                       <Typography variant='h3'>Our Services</Typography> 
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
                  <Typography align="left" variant="body2" color="text.secondary">
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
                  <div className='card-body'>
        <Box sx={{ mt: 1 }} >
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column", bgcolor: "#F1F4E6ff" }} elevation={24}>
                <br/><br/>
                <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={12}>
                       <Typography variant='h4'>For All Tastes And All Desires</Typography>
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
                       <Typography variant='h4'>About Us</Typography>
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
                       <Typography variant='h4'>Reach Us</Typography>
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
                    <Typography variant='h5'>Contact</Typography><br/><br/>
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
              fontSize: { xs: '7px', sm: '12px', md: '14px' }, // Adjust the font size for different screen sizes
              p: { xs: '8px 16px', sm: '12px 18px', md: '16px 28px' }, // Adjust the padding for different screen sizes
            }}
          >
                    <WhatsAppIcon sx={{ mr: 1 }} />
                    <Typography variant='button'  sx={{
              fontSize: { xs: '8px', sm: '12px', md: '16px' }, // Adjust the font size for different screen sizes
            }}>Chat on WhatsApp</Typography>
                    </Fab></a>
                    </Grid>
                    </Grid></Box>
                    <br/>
                    <Typography>Reach out to us today to start your real estate journey. Our friendly team is eager to answer your queries and help you find your dream property.</Typography>
                    </div><br/><br/>
    </Paper></Grid></Grid>
    </Box>
        </div>
        </div>
    </div>
  )
}

export default HomeTop