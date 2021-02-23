import React from 'react';
import Button from './Button';
import NewsSuccess from "./NewsSuccess.js";

const handleNulls = (e) => {
	e.preventDefault();
    alert('This link is being built!');
}


class NewsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', modVis: false };
    }

    checkEmail = (event) => {
        this.setState({email: event.target.value});
    }

    sendEmail = (event) => {
        event.preventDefault();
		alert("You have subscribed with the following email address: ");
    }

    render() {
        return (
				<>
					<NewsSuccess visible={this.state.modVis}/>
					<form onSubmit={this.sendEmail}>
						<input className='footer-input' name='email' type='email' placeholder='Your Email' onChange={this.checkEmail} />
						<Button buttonStyle='btn--outline' type='submit'>Subscribe</Button>
					</form>
				</>
		);
	}
}

export default NewsForm;
