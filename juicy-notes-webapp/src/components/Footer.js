import React from 'react';
import { FooterContentWrapper, FooterWrapper, Img } from '../styles/FooterStyles';

export default function Footer() {
    return (
        <FooterWrapper>
            <FooterContentWrapper>
                <Img height="50%" src="https://internetowe.pja.edu.pl/img/logo_header.png"></Img>
                <Img height="50%" src="https://devmuster.pja.edu.pl/assets/hackathon.png"></Img>
            </FooterContentWrapper>
        </FooterWrapper>
    );
}

