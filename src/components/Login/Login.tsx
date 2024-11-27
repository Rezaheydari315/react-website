import './Login.css'
import '../../font.css'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Login() {
    return (
        <>
            <div className='Login'>
                <Container className='parent_Login'>
                    <Link to='/Home' className='Login_backtoHome_btn link'>Home</Link>
                    <form action="" className='Login_form'>
                        <input type="text" placeholder='Username' className='Login_input_username' />
                        <input type="password" placeholder='Password' className='Login_input_password' />
                        <button className='Login_btn' >Login</button>
                    </form>
                </Container>
            </div>
        </>
    )
}
export default Login