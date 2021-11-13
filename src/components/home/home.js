
import React from 'react'
import { Container } from 'react-bootstrap';
import Footer from '../footer/footer';
import Header from '../header/header';
import CustomTabs from '../home/tabs/tabs';

import './home.scss'
import RegisterBlock from './register-block/register-block';
import TextBlock from './text-block/text-block';

 function home() {
    return (
        <div>
        <Header />
        <Container >   
        <TextBlock />
        <CustomTabs />
        </Container>
        <RegisterBlock />
        <Footer />
        </div>
        
    )
}
export default home;