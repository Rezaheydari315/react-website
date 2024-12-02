import './Footer.css'
import '../../font.css'
import { Container } from 'react-bootstrap'
import { IoLogoTwitter } from "react-icons/io5";
import { SiLinkedin } from "react-icons/si";

function Footer() {
    return (
        <>
            <div className='Footer'>
                <Container>
                   <div className='parent_Footer'>
                   <img src="/react-website/Image/Footer.png" alt="" className='Footer_image' />
                      <p className='Footer_title'>Beema</p>
                    <h2 className='Footer_description'>
                        Just say the magical word
                        and we will do the rest
                    </h2>
                    <button className='Footer_btn'>Start your Project</button>

                    <div className='Footer_bottom'>
                        <div className='Footer_bottom_left'>
                            <ul className='Footer_bottom_left_list'>
                                <li className='Footer_bottom_left_item'> <a href="" className='Footer_bottom_left_link'>Privacy Policy</a> </li>
                                <li className='Footer_bottom_left_item'> <a href="" className='Footer_bottom_left_link'>Terms of Service</a> </li>
                                <li className='Footer_bottom_left_item'> <a href="" className='Footer_bottom_left_link'>Contact</a> </li>
                            </ul>
                        </div>
                        <div className='Footer_bottom_right'>
                        <IoLogoTwitter />
                            <SiLinkedin />
                        </div>
                    </div>
                   </div>
                </Container>
            </div>
        </>
    )
}
export { Footer }