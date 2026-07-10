import React, { useState, useEffect } from 'react'; 
import { FaArrowCircleUp } from 'react-icons/fa'; 
import { Button } from 'react-bootstrap';

const ScrollButton = () => { 
    const [visible, setVisible] = useState(false); 

    const toggleVisible = () => { 
        const scrolled = document.documentElement.scrollTop; 
        if (scrolled > 300) { 
            setVisible(true); 
        } else if (scrolled <= 300) { 
            setVisible(false); 
        } 
    }; 

    const scrollToTop = () => { 
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth'
        }); 
    }; 

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible); 
        return () => {
            window.removeEventListener('scroll', toggleVisible);
        };
    }, []);

    return ( 
        <Button 
        
            style={{
                position: 'fixed',
                bottom: '30px',
              
                right: '30px',
                display: visible ? 'inline' : 'none',
                zIndex: 1000 ,
                backgroundColor:"#c10023b2",
                border:"1px solid #c10023b2 "
                
            }} 
            onClick={scrollToTop}
        >
            <FaArrowCircleUp   height="30px" />
        </Button> 
    ); 
}; 

export default ScrollButton; 
