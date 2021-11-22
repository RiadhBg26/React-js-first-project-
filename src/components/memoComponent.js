import React from 'react'

function MemoComponent({name}) {
	console.log('Rendering memo component');
	return (
		<div>
			{name}
		</div>
	)
}
// React.memo(componentName) is a method to disallow re-rendering when shallow comparison is returning true (prevProps & prevState === currentProps & currentState)
// React.memo(componentName) works with functional components (non class-based components)
export default React.memo(MemoComponent)
