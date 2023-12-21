import React, { useEffect } from "react";
import {Header} from '../components/Header/Header';
import {HeaderMenu} from '../components/HeaderMenu/HeaderMenu';
import {About} from '../components/About/About';
import {Choose} from '../components/Choose/Choose';
import Work from '../components/Work/Work';
import {Review} from '../components/Review/Review';
import Feedback from '../components/Feedback/Feedback';
import {Footer} from '../components/Footer/Footer';

import Modal from '../components/Modal/Modal';
import Loader from '../components/Loader/Loader';

import 'aos/dist/aos.css';
import '../styles/App.css';

const App = () => {
    

    return (
        <>
            <Modal />
            <Loader />
        
            <HeaderMenu />
            <Header />
            <About />
            <Review />
            <Choose />
            
            <Work />
            <Feedback />
        
            <Footer />
            
            </>
        
    );
    
}

export default App;