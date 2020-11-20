import React from 'react';
import Button from './Button';


class NewsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
  }
  checkEmail = (event) => {
    this.setState({email: event.target.value});
  }
  sendEmail = (event) => {
    event.preventDefault();
    alert("You have subscribed with the following email address: " + this.state.email);
  }
  render() {
    return (
      <form onSubmit={this.sendEmail}>
          <input className='footer-input' name='email' type='email' placeholder='Your Email' onChange={this.checkEmail} />
          <Button buttonStyle='btn--outline' type='submit'>Subscribe</Button>
      </form>
    );
  }
}

export default NewsForm;
