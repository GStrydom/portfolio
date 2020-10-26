import React from "react";
import { Button, Header, Image, Modal } from 'semantic-ui-react';

const data = [
	{

	}
]

function Weather() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Launch Script</Button>}
    >
      <Modal.Header> == Weather Script ==</Modal.Header>
      <Modal.Content>
		<div>
			<h1>00.00.00</h1>
		</div>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
          Close
        </Button>
        <Button
		  color='green'
          content="Done"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default Weather;