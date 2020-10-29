import React, { useState } from 'react'
import { Radio, Message, Divider, Button, Form, TextArea, Header, Icon, Segment } from 'semantic-ui-react'

import ReactCardFlip from 'react-card-flip';

import axios from "axios";

import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
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
	const [enqABack, setEnqABack] = useState('linear-gradient(to right, #396afc, #2948ff)');
	const [enqBBack, setEnqBBack] = useState('linear-gradient(to right, #f85032, #e73827)');

	const [textA, setTextA] = useState("BUSINESS PROJECT");
	const [textB, setTextB] = useState("FEEDBACK ENQUIRY");

	const [enqAWidth, setEnqAWidth] = useState("45%");
	const [enqBWidth, setEnqBWidth] = useState("45%");

	const [enqADisplay, setEnqADisplay] = useState("visible");
	const [enqBDisplay, setEnqBDisplay] = useState("visible");

	const [enqHeight, setEnqHeight] = useState("200px");

	const [enqPad, setEnqPad] = useState("5rem");

	const [showBus, setShowBus] = useState(false);
	const [showFeed, setShowFeed] = useState(false);

	const handleAClicked = () => {
		setEnqBDisplay("none");
		setEnqAWidth("100%");
		setTextA("");
		setEnqABack('linear-gradient(to right, #FFFFFF, #FFFFFF)');
		setEnqPad("1rem");
		setEnqHeight("800px");
		setShowBus(!showBus);
	};

	const handleBClicked = () => {
		setEnqADisplay("none");
		setEnqBWidth("100%");
		setTextB("");
		setEnqBBack('linear-gradient(to right, #FFFFFF, #FFFFFF)');
		setEnqPad("1rem");
		setEnqHeight("800px");
		setShowFeed(!showFeed);
	};

	return (
		<>
			<Divider horizontal>
					<Header as='h2'>
						<div>
							<span><Icon name='angle double left' /></span>
							<span>Contact Us</span>
							<span><Icon name='angle double right' /></span>
						</div>
					</Header>
				</Divider>
			<Fade cascade>
				<Segment basic>
					<Segment basic className="enqA" style={{ backgroundImage: enqABack, width: enqAWidth, padding: enqPad, display: enqADisplay, minHeight: enqHeight }}>
						<h1 onClick={handleAClicked}>{textA}</h1>
						{showBus && <ContactForm />}
					</Segment>
				
					<Segment basic className="enqB" style={{ backgroundImage: enqBBack, width: enqBWidth, padding: enqPad, display: enqBDisplay, minHeight: enqHeight }}>
						<h1 onClick={handleBClicked}>{textB}</h1>
						{showFeed && <ContactForm isFlipped={true} />}
					</Segment>
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

	const [isFlipped, setFlipped] = useState(false);

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
		setFlipped(!isFlipped);
	}

	const [radioValue, setRadioValue] = useState("this");

	const onRadioChange = () => {
		setRadioValue("this");
	}

	if(props.flippedState === "true") {
		setFlipped(true);
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
              this.resetForm()
          }else if(response.data.status === 'fail'){
              alert("Message failed to send.")
          }
        })
	}

	return (
		<Pulse>
		<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
			<Segment basic style={{ marginTop: '0', paddingTop: '0' }}>
				<Flip left cascade><Header as="h1" style={{ marginTop: '0', paddingTop: '0', marginBottom: '3rem' }}>We Take Business Seriously</Header></Flip>
    			<Message
    				style={{ color: '#FFFFFF', backgroundImage: 'linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)' }}
					attached
     	 			content='Let us know your software requirements and an agent will get back to your shortly.'
     	 			size='tiny'
    			/>
    			<Form className='attached fluid segment formBox' size="big">
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

      				<Form.Group>
      					<Form.Input 
      						label='Phone Number' 
      						placeholder='Phone Number' 
      						type='text'
      						onChange={onBusPhoneChange}
							value={busPhone}
      					/>
      					<Form.Input 
      						label='Email' type='email'
      						placeholder='Email'
      						onChange={onBusEmailChange}
							value={busEmail}
      					/>
      				</Form.Group>

      				<Form.Group>
      					<Form.Field>
        					Your prefered contact method is: <b>{radioValue}</b>
        				</Form.Field>
        				<Form.Field>
				          	<Radio
					            label='Email'
					            name='radioGroup'
					            value='this'
					            checked={radioValue === 'this'}
					            onChange={onRadioChange}
				          	/>
        				</Form.Field>
        				<Form.Field>
				          	<Radio
					            label='Phone'
					            name='radioGroup'
					            value='that'
					            checked={radioValue === 'that'}
					            onChange={onRadioChange}
				          	/>
        				</Form.Field>
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
					<Button size="medium" color="red" onClick={handleFlip}>Switch</Button>
				</Message>
			</Segment>

			<Segment basic style={{ marginTop: '0', paddingTop: '0' }}>
				<Flip left cascade><Header as="h1" style={{ marginTop: '0', paddingTop: '0', marginBottom: '3rem' }}>Let Us Know Your Thoughts!</Header></Flip>
    			<Message
    				style={{ color: '#FFFFFF', backgroundImage: 'linear-gradient(to right, #f85032, #e73827)' }}
					attached
     	 			content='We appreciate and take note of every feedback message we receive, so please let us know how you think we can improve.'
     	 			size='tiny'
    			/>
    			<Form className='attached fluid segment formBox' size="big">
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
					<Button size="medium" primary onClick={handleFlip}>Switch</Button>
				</Message>
			</Segment>
		</ReactCardFlip>
		</Pulse>
  	)
};


export default Contact;