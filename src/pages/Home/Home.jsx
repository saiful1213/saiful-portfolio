import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import { Container } from '@mui/material';
import { Cursor } from 'custom-pointer-react';

function ScrollTop(props) {
   const { children, window } = props;
   const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
   });

   const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
         '#back-to-top-anchor',
      );

      if (anchor) {
         anchor.scrollIntoView({
            block: 'center',
         });
      }
   };

   return (
      <Fade in={trigger}>
         <Box
            onClick={handleClick}
            role="presentation"
            sx={{ position: 'fixed', bottom: 16, right: 16 }}
         >
            {children}
         </Box>
      </Fade>
   );
}

ScrollTop.propTypes = {
   children: PropTypes.element.isRequired,
   window: PropTypes.func,
};


export default function Home(props) {
   return (
      <React.Fragment>
         <CssBaseline />
         <Cursor
            showRing={true}
            color='#000000'
            ringSize={25}
            cursorSize={5}
            ringBorder={1}
         />
         {/* Navbar */}
         <Navbar></Navbar>
         <Toolbar id="back-to-top-anchor" />
         {/* Content */}
         {/* <Container>
            <Box sx={{ my: 2 }}>
               {[...new Array(12)]
                  .map(
                     () => `Cras mattis consectetur purus sit amet fermentum.Cras justo odio, dapibus ac facilisis in, egestas eget quam.Cras mattis consectetur purus sit amet fermentum.Cras justo odio, dapibus ac facilisis in, egestas eget quam.Cras mattis consectetur purus sit amet fermentum.Cras justo odio, dapibus ac facilisis in, egestas eget quam.Cras mattis consectetur purus sit amet fermentum.Cras justo odio, dapibus ac facilisis in, egestas eget quam. `,
                  )
                  .join('\n')}
            </Box>
         </Container> */}

         <Container>
            <Banner></Banner>
         </Container>

         <ScrollTop {...props}>
            <Fab size="small" aria-label="scroll back to top">
               <KeyboardArrowUpIcon />
            </Fab>
         </ScrollTop>
      </React.Fragment>
   );
}