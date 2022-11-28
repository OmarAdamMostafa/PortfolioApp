import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { titles } from '../utils/constants';
import headerImage from '../assets/img/header-img.svg';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting,setIsDeleting] = useState(false);
    const [currentText, setCurrentText] = useState('');
    const [delta,setDelta] = useState(300 - Math.random() * 100) // How fast one letter comes after the other
    const period = 2000; // How long between each toRotate array value

    const tick = () => {
        let i = loopNum % titles.length;
        let fullText = titles[i];
        let updatedText = isDeleting ? fullText.substring(0, currentText.length - 1) : fullText.substring(0, currentText.length + 1)

        setCurrentText(updatedText)

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period)
        }
        else if(isDeleting && updatedText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick()
        }, delta)
        return () => {clearInterval(ticker)}
        // eslint-disable-next-line
    },[currentText])

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>
                                {`Hi I'm Omar Adam and I'm a `} 
                                <span className="wrap">
                                {currentText}
                                </span>
                            </h1>
                            <p> 
                                Hard working and fast learning individual that has good
                                communication skills, a sense of humor and willingness to learn
                                new things. Motivated to leave his mark on the IT industry. 
                            </p>
                            <button onClick={()=>window.location.href ='#contact'}>
                                Let's Connect <ArrowRightCircle size={25}/>
                            </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImage} alt='Header Img'/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;