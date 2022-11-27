import { Row, Col } from "react-bootstrap";

const Newsletter = () =>{
    return  (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Join our newsletter</h3>
                    </Col>
                    <Col md={6} xl={7}>
                        <form action='https://formspree.io/f/xvoynwnp' method='POST'>
                            <div className="new-email-bx">
                                <input type='email' name='email' placeholder='Enter email'/>
                                <button type='submit'>Subscribe</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}

export default Newsletter;