import React, { useState } from "react";
import { Button, Modal, Segment, Image, Input } from 'semantic-ui-react';

import eight_proto from '../../images/eight_proto.png';

let answers = ['It is certainly so', 'Ask again later', 'Most certainly', 'Most probably not'];

function chooseAnswer() {
    let answerNum = Math.floor(Math.random() * answers.length);
    let answer = answers[answerNum];
    return answer;
}

function EightBall() {
  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState("");

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
    		<div class='ui centered'><Image size='small' src={eight_proto} /><span>{answer}</span></div>
            <Input icon='search' placeholder='Ask me anything...' />
            <Button 
                color='green'
                content='Ask'
                labelpsotion='center'
                onClick={() => chooseAnswer()}
            />
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
