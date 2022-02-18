import { Link } from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import { useHistory } from 'react-router-dom'

const Form = () => {
	const history = useHistory()
	return (
		<div className='formContainer'>
			<img
				src='https://source.unsplash.com/K4mSJ7kc0As/600x800'
				alt='doggie'
				className='loginImage'
			/>
			<div className='form'>
				<h3>Welcome Back!</h3>
				<input type='text' placeholder='Enter Email Address...' />
				<input type='password' placeholder='password' />
				<div className='check'>
					<input type='checkbox' id='remember' />
					<label htmlFor='remember'> Remember me</label>
				</div>
				<button
					className='btn login-btn'
					onClick={() => {
						history.push('/')
					}}
				>
					Login
				</button>
				<button
					className='btn google-btn'
					onClick={() => {
						history.push('/')
					}}
				>
					<p>
						<GoogleIcon fontSize='small' />
						<span>Login with Google</span>
					</p>
				</button>
				<button
					className='btn fb-btn'
					onClick={() => {
						history.push('/')
					}}
				>
					<p>
						<FacebookRoundedIcon fontSize='small' />
						<span>Login with Facebook</span>
					</p>
				</button>
				<div className='links'>
					<Link to='/resetpwd'>Forgot Password?</Link>
					<Link to='/create'>Create an Account</Link>
				</div>
			</div>
		</div>
	)
}

export default Form