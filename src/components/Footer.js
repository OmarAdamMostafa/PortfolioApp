import { Container, Row, Col } from "react-bootstrap";
import Newsletter from "./Newsletter";
import logo from '../assets/img/logo.svg'
import {socials} from '../utils/constants'

const Footer = () =>{
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Newsletter/>
                    <Col sm={6}>
                        <img src={logo} alt='logo'/>
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className="social-icon">
                        {
                            socials.map((social)=>{
                                return <a key={social.id} href={social.url}><img src={social.img} alt={social.name}/></a>
                            })
                        }
                    </div>
                    <p>Copyright &copy; {new Date().getFullYear()}. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;