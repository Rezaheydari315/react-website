import './HeaderProj.css'

import '../../font.css'
import { BiChevronDown } from "react-icons/bi";
import { Link } from 'react-router-dom';







function HeaderProj() {
  return (
    <>
      <div className='Header'>

        <div className='Header_top'>

          <div className='Header_top_left'>


            <img src="/Image/logo_header.png" alt="" className='Header_top_image' />


            <div className='parent_Header_top_left_span'>
              <span className='Header_top_left_span'>Beema</span>
            </div>

          </div>

          <div className='Header_top_right'>
            <Link to='/Product' className='Header_top_right_btn_starts link'>product</Link>
            <Link to='/Login' className='Header_top_right_btn_starts link'>Login</Link>
            
          </div>
        </div>

        <div className='Header_main'>
          <img src="/Image/logo_header.png" alt="" className='Header_main_image' />
          <p className='Header_main_mark'>Beema</p>
          <div className='Header_main_desc'>
            <p className='Header_main_desc_top'>Software Development</p>
            <p className='Header_main_desc_margin'>From the best in the industry</p>
          </div>

          <button className='Header_main_btn'>Start your Project</button>
          <div className='parent_Header_main_icon'>
            <BiChevronDown className='Header_main_icon'></BiChevronDown>
          </div>

        </div>
      </div>
    </>
  )
}
export { HeaderProj } 