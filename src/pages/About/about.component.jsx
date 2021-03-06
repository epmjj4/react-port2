import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';



import Profile from '../../assets/Me1.jpg';

import './About.style.css';

const About = () => {
    return (
        <div id='about'>
            <div className='about'>
                <h1 className='pt-3 text-center font-details pb-3'>About Me</h1>
                <Container>
                    <Row className='pt-3 pb-5 align-items-center'>
                        {/* Profile pic */}
                        <Col xs={12} md={6}>
                            <Row className='justify-content-center mb-2 mr-2'>
                                <Image className='profile justify-content-end' alt="profile" src={Profile} thumbnail fluid />
                            </Row>
                        </Col>

                        {/* ABout Me Description */}
                        <Col xs={12} md={6}>
                            <Row className='align-items-start p-2 my-details rounded'>
                                {/* description */}
                        Hello, My name is <strong>&nbsp;Ernesto Pelaez.</strong> I am a budding Web Developer. Thank you very much for checking out my page. I am embarking on a new Career as a Full Stack Web Developer. I'm very excited to begin this new chapter in my career and I'm eager to continue to learn and expand my skills.
                    </Row>
                            <Row>
                                {/* buttons */}
                                <Col className='d-flex justify-content-center flex-wrap'>
                                    {/* <div>
                                        <a href="#contact">
                                            <Button className='m-2 bg-light' variant="outline-primary">
                                                Let's Talk
                                        </Button>
                                        </a>
                                    </div> */}
                                    <div>
                                        <a href="https://drive.google.com/file/d/1wBRn3wwCCyjFUvIrk_FDiiHCbAn1McGM/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2 bg-light" variant="outline-success">
                                                My Resume
                      </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/epmjj4" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2 bg-light" variant="outline-dark">
                                                GitHub
                      </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/ernesto-pelaez-421ba071/" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2 bg-light" variant="outline-info">
                                                LinkedIn
                      </Button>
                                        </a>
                                    </div>
                                </Col>

                            </Row>

                        </Col>
                    </Row>
                </Container>


            </div>
        </div>
    )
}

export default About;