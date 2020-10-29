import React from 'react';


const UpStore = () => {
	constructor(props) {
		super(props);

		this.state = {
			appName = "New Weather Soft"
		}
	}

	render() {
		return React.Children.map(this.props.children, (child) => {
			return React.cloneElement(child, {...this.state})

		})
	}
}
