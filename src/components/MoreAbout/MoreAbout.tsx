import './MoreAbout.css'
import '../../font.css'
import { Container} from 'react-bootstrap'


function MoreAbout() {
    return (
        <>
            <div className='more_about'>
                <Container>

                    <div className='parent_more_about_header'>
                        <h2 className='more_about_header green'>More about Beema</h2>
                    </div>

                    <div className='parent_more_about_main'>
                        <div className='more_about_main_left green'>
                            <p className='more_about_main_left_text green'>Beema is about designing, building and deliverying best quality software for your company. </p>
                            <p className='more_about_main_left_text green'>We make sure that you get the best software inferstracture and set of applications to ensure the best experience of your clients. </p>
                            <p className='more_about_main_left_text green'>So wether you are handling thousands of payment transactions or you’re just starting out, you are in the right place. </p>
                        </div>
                        <div className='more_about_main_right'>
                            <img src="/react-website/Image/MoreAbout.png" className='more_about_main_right_iamge' alt="" />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}
export { MoreAbout }