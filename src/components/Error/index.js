import './index.css'
import { Link } from 'react-router-dom'

const index = () => {
	return (
		<div className='notfound'>
			<h1>404</h1>
			<h4>Page Not Found</h4>
			<span>It looks like you found a glitch in the matrix...</span>
			<Link to='/dashboard/'>← Back to Dashboard</Link>
		</div>
	)
}

export default index