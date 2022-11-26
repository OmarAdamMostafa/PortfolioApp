import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import {skills} from '../utils/constants'
import colorSharp from '../assets/img/color-sharp.png'

const Skills = () => {
    const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
    };

    return (
        <section className="skill" id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>
                                Capable of
                                writing highly-detailed reports. Knowledgeable in HTML, CSS and
                                JavaScript (React). Also well educated in Data Structures & Algorithms, 
                                C++, Java, Python, MongoDB, and Object-Oriented Programming.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                {
                                    skills.map((skill)=>{
                                        return (
                                            <div className="item" key={skill.id}>
                                                <img src={skill.img} alt={skill.text}/>
                                                <h5>{skill.text}</h5>
                                            </div>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} alt='ColorSharp' className='background-image-left'/>
        </section>
    )
}

export default Skills;