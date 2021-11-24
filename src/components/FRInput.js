import React from 'react'

// changed the function to arrow function to forward inputRef from parent component to this child Component
// the arraow function is passed as a parametr to React.forwardRef() method
// every functional component recieves props as a parameter
// when a component is passed as a parameter to the React.createRef() method, it recieves the ref attribute as a second parameter
// the ref parameter will point to the value of the ref attribute from the parent component 'FRParentInput'
const FRInput = React.forwardRef((props, ref ) => {
	return (
		<div>
			{/* the parent component can access this input element after forwarding the ref to it throuh React.forwardRef() */}
			<input type="text"  ref={ref} />
		</div>
	)
})

export default FRInput
