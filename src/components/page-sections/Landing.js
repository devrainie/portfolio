import HeroImg from '../../assets/images/hero-img1.png';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Typed from 'react-typed';
import './Landing.css';


export default function Landing(){
    return(
        <div>
            <Container>
                <Row>
                    <Col className='col-style'>
                        <Typed 
                        className='typed-text'
                        strings={[
                            "Hi, my name is ",
                            "I am an aspiring full stack developer",
                            "I love coding creative projects"
                        ]}
                        typeSpeed={50}
                        backSpeed={30}
                        loopCount={5}
                        />
                        <p id='hero-txt'>I am currently a junior cloud and dev-ops engineer who also enjoys web development. Recently, i completed the Code First Girls 16 week boot camp on the full stack stream. Scroll to learn more about my journey!</p>

                        <Row className='btn-display'>
                            <Col xs lg="2" className='sm-icons'>
                                <button className='sm-btn'><FontAwesomeIcon icon={faInstagram} size="2x"/> </button>
                                {/* <FontAwesomeIcon icon={faInstagram} size="2x"/> */}
                            </Col>
                            <Col xs lg="2" className='sm-icons'>
                                <button className='sm-btn'>
                                    <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                                </button>
                                
                            </Col>
                            <Col xs lg="2" className='sm-icons'>
                                <button className='sm-btn'>
                                    <FontAwesomeIcon icon={faGithub} size="2x"/>
                                </button>
                                
                            </Col>
                        </Row>

                    </Col>
                    <Col>
                        <Image src={HeroImg} alt="Hero Image" fluid />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}