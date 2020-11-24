import React from 'react';

import { Grid, Header, Message, Button, Icon, Segment, Label } from 'semantic-ui-react';

import Footer from '../Footer';

import Flash from "react-reveal/Flash";

import "../css/Services.css";


const Services = () => {
	return (
		<>
			<Head />
			<ServiceSection />
			<Footer />
		</>
	);
};

const Head = () => {
	return (
	    <>
		    <Segment inverted color='blue' textAlign='center' raised>
			    <Header as='h1' icon textAlign='center' size='huge'>
			        <Icon name='handshake outline' circular inverted/>
			        <Header.Content><h1><strong>Our Services</strong></h1></Header.Content>
			    </Header>

			    <Message size="huge">
			    	We handle each project with great care and treat customer with the time and attention they deserve. If the service you requested in not listed on this page, you can <span className="flashCont"><Flash><span className="contactLink">contact</span></Flash></span> us to make arrangements.
		    	</Message>

		    	<Button secondary animated size="big">
		    		<Button.Content visible>Make it Happen</Button.Content>
			    	<Button.Content hidden>Go!</Button.Content>
		    	</Button>
	    	</Segment>
    	</>
	)
}

const ServiceSection = () => {
	return (
		<>
		    <Grid textAlign='center' columns='equal' centered stackable padded relaxed>
				<Grid.Row textAlign='center'>
					<Grid.Column textAlign='center' verticalAlign='middle'>
						<Label color='red' size='massive' className="labels" style={{marginLeft: "5rem", marginBottom: "3rem"}} ribbon>Web Development</Label>
						<Message size='medium'>
						We offer a wide range of Web Development solutions ranging from basic Personal HTML/CSS sites, to complete CMS Apps deisgned to meet
						the demands of business.  We are trained in multiple Web FrameWorks including React, Laravel and Django, and are proficient with most DBMS.
						</Message>
						<Button color='red' animated size="large" style={{marginTop: "1.5rem"}}>
						    <Button.Content visible>Get A Quote</Button.Content>
						    <Button.Content hidden><Icon name="arrow alternate circle right" /></Button.Content>
						</Button>
					</Grid.Column>

                    <Grid.Column>
                        <div class="ui segment basic">
                            <img class="ui centered large image" alt="Web Development" src="https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        </div>
                    </Grid.Column>

				</Grid.Row>

				<Grid.Row textAlign='center'>
					 <Grid.Column>
                        <div class="ui segment basic">
                            <img class="ui centered large image" alt="Graphic Design" src="https://images.pexels.com/photos/2693200/pexels-photo-2693200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        </div>
                    </Grid.Column>

					<Grid.Column textAlign='center' verticalAlign='middle'>
						<Label color='blue' className="labels" size='massive' style={{marginLeft: "4.5rem", marginBottom: "3rem"}} ribbon>Graphic Design</Label>
						<Message size='medium'>
							Whatever your logo or Graphic Design needs, we will make it our mission to make sure you are satisfied with the final result. We have many years experience
							with Adobe Photoshop &amp; Illustrator and uesd many more tools to create High Quality designs.
						</Message>
						<Button primary animated size="large" style={{marginTop: "1.5rem"}}>
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
