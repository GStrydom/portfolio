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
  render() {
    return (
      <form>
          <input className='footer-input' name='email' type='email' placeholder='Your Email' onChange={this.checkEmail} />
          <Button buttonStyle='btn--outline'>Subscribe</Button>
      </form>
    );
  }
}

export default NewsForm;
