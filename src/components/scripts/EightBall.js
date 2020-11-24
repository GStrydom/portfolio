import React, { useState } from "react";
import { Button, Modal, Segment, Image, Input } from 'semantic-ui-react';

import eight_proto from '../images/eight_proto.png';


function EightBall() {
  const [open, setOpen] = useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Launch Script</Button>}
    >
      <Modal.Header>Magic 8 Ball</Modal.Header>
      <Modal.Content>
		    <Segment basic centered>
			    <Image size='small' src={eight_proto} />
          		<Input icon='search' placeholder='Ask me anything...' />
		    </Segment>
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

export default EightBall;