import { Box, Container, Grid, Link, Typography } from '@mui/material';
import React, { Fragment } from 'react'

function Copyright() {
    return (
      <Fragment>
        {'© '}
        <Link color="inherit" href="#">
          Kumar Real Estate
        </Link>{' '}
        {new Date().getFullYear()}
      </Fragment>
    );
  }
  
  const iconStyle = {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'warning.main',
    mr: 1,
    '&:hover': {
      bgcolor: 'warning.dark',
    },
  };

const Footer = () => {
  return (
    <div className='footer'>
         <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: '#CBDD9Eff' }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={5}>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Typography variant="h6" marked="Center" gutterBottom>
              Contact Us
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Typography variant='button' >Phone Number: </Typography>
                <Typography variant='button'> +91 98425 84714</Typography>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
              <Typography variant='button' >Address: </Typography>
                <Typography variant='button'> 6/79, S Pillayar Kovil St, unjapalaiyam, Kaniyur, Anupatti, Tamil Nadu 641658</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              {/* <Grid item sx={{ display: 'flex' }}>
                <Box component="a" href="https://mui.com/" sx={iconStyle}>
                  <img
                    src="/static/themes/onepirate/appFooterFacebook.png"
                    alt="Facebook"
                  />
                </Box>
                <Box component="a" href="https://twitter.com/MUI_hq" sx={iconStyle}>
                  <img
                    src="/static/themes/onepirate/appFooterTwitter.png"
                    alt="Twitter"
                  />
                </Box>
              </Grid> */}
              <Grid item>
                <Copyright />
                <Grid item>
            <Typography variant="caption">
              {'Webpage developed by '}
              <Link href="https://github.com/Un-Knwn-me" rel="developed" title="Un-knwn">
                Un-Knwn
              </Link>
              {/* {' from '}
              <Link href="https://www.flaticon.com" rel="sponsored" title="Flaticon">
                www.flaticon.com
              </Link>
              {' is licensed by '}
              <Link
                href="https://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC 3.0 BY
              </Link> */}
            </Typography>
          </Grid>
              </Grid>
            </Grid>
          </Grid>


        </Grid>
      </Container>
    </Typography>
    </div>
  )
}

export default Footer