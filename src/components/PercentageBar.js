const PercentageBar = ({ percent, col }) => {
	return (
		<div className='percentageContainer'>
			<div style={{ width: percent, backgroundColor: col, height: '100%' }} />
		</div>
	)
}

export default PercentageBar