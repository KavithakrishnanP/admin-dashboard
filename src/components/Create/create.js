import { Link } from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import { useHistory } from 'react-router-dom'

const Create = () => {
	const history = useHistory()
	return (
		<div className='createForm'>
			<img
				src='https://source.unsplash.com/Mv9hjnEUHR4/600x800'
				alt='doggie'
				className='loginImage'
			/>
			<div className='form'>
				<h3>Create an Account!</h3>

				<div className='splitInput'>
					<input type='text' placeholder='First Name' />
					<input type='text' placeholder='Last Name' />
				</div>
				<input type='text' placeholder='Email Address' />
				<div className='splitInput'>
					<input type='password' placeholder='Password' />
					<input type='password' placeholder='Repeat Password' />
				</div>

				<button
					className='btn login-btn'
					onClick={() => {
						history.push('/')
					}}
				>
					Register Account
				</button>
				<button
					className='btn google-btn'
					onClick={() => {
						history.push('/')
					}}
				>
					<p>
						<GoogleIcon fontSize='small' />
						<span>Register with Google</span>
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
						<span>Register with Facebook</span>
					</p>
				</button>
				<div className='links'>
					<Link to='/resetpwd'>Forgot Password?</Link>
					<Link to='/login'>Already have an account? Login!</Link>
				</div>
			</div>
		</div>
	)
}

export default Create