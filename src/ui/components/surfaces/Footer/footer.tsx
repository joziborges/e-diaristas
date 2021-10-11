import React from 'react';
import {FooterContainer, FooterStyled, Footertitle, Applist} from './footer.style'
import { Typography, Box } from '@mui/material';

const Footer = () => {
    return (
     <FooterStyled>
         <FooterContainer>
             <Box sx={{ maxWidth:'400px' }}>
             <Footertitle>Quem somos</Footertitle>
             <Typography variant={'body2'} sx={{mt: 2 }}>
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, sunt molestias nemo eum soluta sapiente maxime obcaecati. Inventore eos eius accusamus qui autem amet, quidem nam, quibusdam ut atque illum?</Typography>
         </Box>
         <div>
         <Footertitle>Baixe nossos aplicativos</Footertitle>
        <Applist>
            <li>
            <a href={'/'} target={'_blank'}
            rel={'noopener noreferrer'} >
            <img src={'/img/logos/app-store.png'} alt={'App Store'} />
        </a>
        </li>
            <li>
            <a href={'/'} target={'_blank'}
            rel={'noopener noreferrer'} >
            <img src={'/img/logos/google-play.png'} alt={'Google Play'} />
        </a>
        </li>
        </Applist>
        </div>
         </FooterContainer>
     </FooterStyled>
    );
}

export default Footer;