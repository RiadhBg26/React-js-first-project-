import React from 'react'

function Hero({heroName}) {
	if (heroName === 'Joker') {
		throw new Error('not a hero')
	}
	return (
		<div>
			<p>{heroName}</p>
		</div>
	)
}

export default Hero
