import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';


class NewsSuccess extends Component {
	state = { visible: this.props.visible }

	handleDismiss = () => {
		this.setState({ visible: false })
	}

  render() {
    if (this.state.visible) {
      return (
        <Message
          onDismiss={this.handleDismiss}
          header='Success'
          content='You have been successfully subscribed!'
        />
      )
    }

    return (
		<>
		</>
    )
  }
}

export default NewsSuccess;
