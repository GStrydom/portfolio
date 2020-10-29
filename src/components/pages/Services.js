import React from 'react';

import { Jumbotron, OverlayTrigger, Popover } from 'react-bootstrap';
import { Grid, Image, Header, Message, Button, Icon } from 'semantic-ui-react';

import Footer from '../Footer';

import Flash from "react-reveal/Flash";

import "../css/Services.css";
import '../../App.css';


const Services = () => {
  return (
  	<>
  		<Head />
  		<ServiceSection />
  		<Footer />
  	</>
  );
};

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">No FEAR</Popover.Title>
    <Popover.Content>
      We accept any challenge! Let us know what you need, and watch it get done!
    </Popover.Content>
  </Popover>
);

const Head = () => {
	return (
		<>
			<div className="contentContainer">
				<Jumbotron>
	  				<Header as='h1' icon textAlign='center' size='huge'>
						<Icon name='handshake outline' circular inverted/>
						<Header.Content><h1 style={{ color: "#FFFFFF" }}><strong>Our Services</strong></h1></Header.Content>
					</Header>

					<Message size="mini">
						<p>
				    		We handle each project with great care and treat customer with the time and attention they deserve. If the service you requested in not listed on this page, you can <span className="flashCont"><Flash><OverlayTrigger trigger="hover" placement="right" overlay={popover}><span className="contactLink">contact</span></OverlayTrigger></Flash></span> us to make arrangements.
						</p>
					</Message>

	    			<Button secondary animated size="big" style={{ marginTop: '1rem' }}>
						<Button.Content visible>Make it Happen</Button.Content>
						<Button.Content hidden>Go!</Button.Content>
					</Button>
				</Jumbotron>
			</div>
		</>
	)
}

const ServiceSection = () => {
	return (
		<>
			<Grid centered padded>
				<Grid.Row columns={2}>
					<Grid.Column style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
						<Header as="h1" style={{ paddingBottom: '2rem' }}>Web Development</Header>
						<p style={{ width: '50%', paddingBottom: '2rem', fontSize: '18px' }}>
							We offer a wide range of Web Development solutions ranging from basic Personal HTML/CSS sites, to complete CMS Apps deisgned to meet
							the demands of business.  We are trained in multiple Web FrameWorks including React, Laravel and Django, and are proficient with most DBMS. 
						</p>
						<Button primary animated size="large">
							<Button.Content visible>Get A Quote</Button.Content>
							<Button.Content hidden><Icon name="arrow alternate circle right" /></Button.Content>
						</Button>
					</Grid.Column>

					<Grid.Column style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
						<Image size="large" src="https://images.pexels.com/photos/1789968/pexels-photo-1789968.jpeg?auto=compress&cs=tinysrgb&dpr=1" />
					</Grid.Column>
				</Grid.Row>

				<Grid.Row columns={2}>
					<Grid.Column style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
						<Image size="large" src="https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&dpr=1" />
					</Grid.Column>

					<Grid.Column style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
						<Header as="h1" style={{ paddingBottom: '2rem' }}>Graphic Design</Header>
						<p style={{ width: '50%', paddingBottom: '2rem', fontSize: '18px' }}>
							Whatever your logo or Graphic Design needs, we will make it our mission to make sure you are satisfied with the final result. We have many years experience
							with Adobe Photoshop & Illustrator and uesd many more tools to create High Quality designs. 
						</p>
						<Button primary animated size="large">
							<Button.Content visible>Get A Quote</Button.Content>
								<Button.Content hidden><Icon name="arrow alternate circle right" /></Button.Content>
							</Button>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</>
	)
}

export default Services;

