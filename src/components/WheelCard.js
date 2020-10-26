import React from "react";


function get_coords(radian_interval, radius) {
	return {
		x: Math.cos(radian_interval) * radius,
		y: Math.sin(radian_interval) * radius
	}
}

function Card(props) {
	let coord = get_coords(props.radian_interval, props.radius);

	return(
		<div style={{...styles.card, left: `${props.center.x + coord.x}px`, top: `${props.center.y - coord.y}px`}}>
		</div>
	)
}

const styles = {
	card: {
		margin: '0',
        padding: '0',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '50px',
        width: '50px',
        backgroundColor: 'blue',
        borderRadius: '25px'
	}
}

export default Card;