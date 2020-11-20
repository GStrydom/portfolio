import React, { useState, useEffect } from 'react'
import { Message, Divider, Button, Form, TextArea, Header, Icon, Segment, Grid } from 'semantic-ui-react'

import ReactCardFlip from 'react-card-flip';

import axios from "axios";

import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";

import "../css/Contact.css";
import Footer from "../Footer";


const Contact = () => {
  return(
    <>
      <ContactChoice />
      <Footer />
    </>
  )
};

const ContactChoice = () => {
	useEffect( () => {
      window.scroll(0,0)
   	}, []);

	const [textA, setTextA] = useState("BUSINESS PROJECT");
	const [textB, setTextB] = useState("FEEDBACK ENQUIRY");
	const [showBus, setShowBus] = useState(false);
	const [showFeed, setShowFeed] = useState(false);
	
	const handleAClicked = () => {
		setTextA('');
		setShowBus(!showBus);
	};

	const handleBClicked = () => {
		setTextB('');
		setShowFeed(!showFeed);
	};

	return (
		<>
			<Divider horizontal>
				<Header as='h2'>
					<span><Icon name='angle double left' /></span>
					<span>Contact Us</span>
					<span><Icon name='angle double right' /></span>
				</Header>
			</Divider>
			
			<Fade cascade>
				<Segment basic>
					<Grid columns='equal' padded relaxed>
						<Grid.Row>
							<Grid.Column color='blue' className='colA' textAlign='center'>
								<Header className='enq' as='h1' onClick={handleAClicked}>{textA}</Header>
								{showBus && <ContactForm />}
							</Grid.Column>
							<Grid.Column color='red' className='colB' textAlign='center'>
								<Header className='enq' as='h1' onClick={handleBClicked}>{textB}</Header>
								{showFeed && <ContactForm flippedState={true} />}
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
			</Fade>
		</>
	);
};

const ContactForm = (props) => {
	const [busFirstName, setBusFirstName] = useState("");
	const [busLastName, setBusLastName] = useState("");
	const [busEmail, setBusEmail] = useState("");
	const [busPhone, setBusPhone] = useState("");
	const [busMessage, setBusMessage] = useState("");

	const [feedName, setFeedName] = useState("");
	const [feedEmail, setFeedEmail] = useState("");
	const [feedMessage, setFeedMessage] = useState("");

	const [isFlipped, setIsFlipped] = useState(props.flippedState);

	const onFirstNameChange = (e) => {
		setBusFirstName(e.target.value);
	}
	
	const onLastNameChange = (e) => {
		setBusLastName(e.target.value);
	}

	const onBusEmailChange = (e) => {
		setBusEmail(e.target.value);
	}

	const onBusPhoneChange = (e) => {
		setBusPhone(e.target.value);
	}

	const onBusMessageChange = (e) => {
		setBusMessage(e.target.value);
	}

	const onFeedNameChange = (e) => {
		setFeedName(e.target.value);
	}

	const onFeedEmailChange = (e) => {
		setFeedEmail(e.target.value);
	}

	const onFeedMessageChange = (e) => {
		setFeedMessage(e.target.value);
	}

	const handleFlip = () => {
		window.scroll(0, 0);
		setIsFlipped(!isFlipped);
	}

	if(props.isFlipped === "true") {
		setIsFlipped(true);
	} 

	const submitEmail = (e) => {
        e.preventDefault();
        axios({
          method: "POST", 
          url:"/send", 
          data:  this.state
        }).then((response)=>{
          if (response.data.status === 'success'){
              alert("Message Sent.");
          }else if(response.data.status === 'fail'){
              alert("Message failed to send.")
          }
        })
	}

	return (
		<Pulse>
		<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
			<Segment basic style={{ marginTop: '0', paddingTop: '0' }}>
    			<Message
    				style={{ color: '#FFFFFF', backgroundImage: 'linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)' }}
					attached
     	 			content='Let us know your software requirements and an agent will get back to your shortly.'
    			/>
    			<Form className='attached fluid segment formBox' size="medium">
      				<Form.Group widths='equal'>
				        <Form.Input
				          fluid
				          label='First Name'
				          placeholder='First Name'
				          type='text'
				          onChange={onFirstNameChange}
						  value={busFirstName}
				        />
				        <Form.Input
				          fluid
				          label='Last Name'
				          placeholder='Last Name'
				          type='text'
				          onChange={onLastNameChange}
						  value={busLastName}
				        />
      				</Form.Group>

      				<Form.Group widths='equal'>
      					<Form.Input
      						fluid
      						label='Phone Number' 
      						placeholder='Phone Number' 
      						type='text'
      						onChange={onBusPhoneChange}
							value={busPhone}
      					/>
      					<Form.Input
      						fluid
      						label='Email' type='email'
      						placeholder='Email'
      						onChange={onBusEmailChange}
							value={busEmail}
      					/>
      				</Form.Group>

					<Form.Group>
						<TextArea
							label='Message'
							placeholder='Enter your message.'
							onChange={onBusMessageChange}
							value={busMessage}
						/>
					</Form.Group>
					
      				<Button size="big" color='blue' onClick={submitEmail}>Contact</Button>
    			</Form>
    			<Message size='large' attached="bottom" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<Header as="h4" style={{ marginBottom: '1rem' }}>Switch To Feedback</Header>
					<Button size="medium" color={buttonAColor} onClick={handleFlip}>Switch</Button>
				</Message>
			</Segment>

			<Segment basic style={{ marginTop: '0', paddingTop: '0' }}>
    			<Message
    				style={{ color: '#FFFFFF', backgroundImage: 'linear-gradient(to right, #f85032, #e73827)' }}
					attached
     	 			content='We appreciate and take note of every feedback message we receive!'
    			/>
    			<Form className='attached fluid segment formBox' size="medium">
      				<Form.Group widths='equal'>
				        <Form.Input
				          fluid
				          label='Name'
				          placeholder='Name'
				          type='text'
				          onChange={onFeedNameChange}
						  value={feedName}
				        />
				        <Form.Input 
      						label='Email' type='email'
      						placeholder='Email'
      						onChange={onFeedEmailChange}
							value={feedEmail}
      					/>
      				</Form.Group>

					<Form.Group>
						<TextArea
							label='Message'
							placeholder='Enter your message.'
							onChange={onFeedMessageChange}
							value={feedMessage}
						/>
					</Form.Group>
					
      				<Button size="big" color='red' onClick={submitEmail}>Contact</Button>
    			</Form>
    			<Message size='large' attached="bottom" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<Header as="h6">Switch To Business</Header>
					<Button size="medium" color={buttonBColor} onClick={handleFlip}>Switch</Button>
				</Message>
			</Segment>
		</ReactCardFlip>
		</Pulse>
  	)
};


export default Contact;
