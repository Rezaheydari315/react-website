import '../../font.css'
import './About.css'
import {  Container } from 'react-bootstrap'

function About() {
  return (
    <>
      <div className='About'>
        <Container>

          <div className='parent_About_header'>
          <div className='About_header'>
              <h2 className='About_header_text green'>What others are saying
                about us</h2>
            </div>
          </div>
           
          

           <div className='parent_About_main'>

              <div className='About_main'>
                <p className='About_main_text green'> I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us.</p>
                 <div className='About_main_footer'>
                   <img src="/react-website/Image/About_John.jfif" alt=""  className='About_main_footer_image' />
                   <span className='About_main_footer_name green'>John coner</span>
                 </div>
              </div>

              <div className='About_main'>
              <p className='About_main_text green'> I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us.</p>
                 <div className='About_main_footer'>
                   <img src="/react-website/Image/About_Megan.jfif" alt=""  className='About_main_footer_image' />
                   <span className='About_main_footer_name green'>Megan borguer</span>
                 </div>
              </div>
           </div>
        </Container>
      </div>
    </>
  )
}
export { About }