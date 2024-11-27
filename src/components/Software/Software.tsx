import './Software.css'
import '../../font.css'
import { Container, Col, Row } from 'react-bootstrap'

function Software() {
    return (
        <>
            <div className='Software'>
                <Container>
                    <Row className='parent_Software_title'>
                        <Col className='Software_title'>
                            <h2 className='Software_title_span'>Best Quality Software</h2>
                        </Col>
                    </Row>



                    <div className='parent_Software_content'>
                        <div className='Software_content_left'>
                            <div className='Software_content_left_div'>
                                <h2 className='Software_content_left_header'>Fully integrated services</h2>
                                <p className='Software_content_left_desc'>We build and deliver fully integrated webapps
                                    with customized control panels that fit your
                                    compnay needs</p>
                            </div>
                        </div>


                        <div className='Software_content_right'>
                            <div className='Software_content_right_div'>
                                <img src="/Image/software_first.png" alt="" className='Software_content_right_img' />
                            </div>
                        </div>
                    </div>



                    <div className='parent_Software_content'>
                        <div className='Software_content_left Software_content_left_show '>
                            <img src="/Image/Software_second.png" alt="" className='Software_content_right_img' />
                        </div>



                        <div className='Software_content_right   Software_content_right_disable'>
                            <h2>Mobile optimized</h2>
                        </div>
                    </div>



                    <div className='parent_Software_content'>
                        <div className='Software_content_left'>
                            <div className='Software_content_left_div'>
                                <h2 className='Software_content_left_header'>Quality is our priority</h2>
                                <p className='Software_content_left_desc'>We have teams of professional developers, designers
                                    and managers that ensures delivering the best
                                    software quality for your company</p>
                            </div>
                        </div>



                        <div className='Software_content_right'>
                            <div className='Software_content_right_div'>
                                <img src="/Image/Software_third.png" alt="" className='Software_content_right_img' />
                            </div>
                        </div>
                    </div>







                </Container>
            </div>
        </>
    )
}
export { Software }