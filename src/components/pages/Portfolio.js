import React, { useState } from 'react';

import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import ReactImageMagnify from 'react-image-magnify';

import { Divider, Header, Icon, Image, Grid, Message } from 'semantic-ui-react'

import Footer from '../Footer';

import "../../css/Portfolio.css";

import profilepic from "../../images/profile.png";
import resumepic from "../../images/resume.jpg";

import angularSkill from '../../images/skills/angular.png';
import phpSkill from '../../images/skills/php.png'
import reactSkill from '../../images/skills/react.png'
import firebaseSkill from '../../images/skills/firebase.png'


const Portfolio = () => {
	return (
  		<>
  			<PortfolioHead />
  			<Footer />
  		</>
	);
}

const PortfolioHead = () => {
	const [showSkills, setShowSkills] = useState(false);
	return(
		<>
			<div className="topbox">
				<Divider horizontal>
					<Header as='h2'>
						<div>
							<span><Icon name='angle double left' /></span>
							<span>Gregory Strydom </span>
							<span><Icon name='angle double right' /></span>
						</div>
					</Header>
				</Divider>
			</div>

			<section className="headingcontainer">
				<div className="leftbox">
					<Fade left>
						<Header as="h2">Web Developer</Header>
					</Fade>
						
					<Zoom>
						<Image src={profilepic} alt="Profile Image" size="medium" rounded />
					</Zoom>
				</div>

				<div className="rightbox">
					<Bounce top>
						<Header as="h1">About Me</Header>
					</Bounce>

					<Message>
						I have over 10 years of experience as a software engineer, and have worked at both small startups and 
						large organizations. While I'm a proficient front-end developer, my expertise is in building scalable
						backend services.  I love creating things and researching new ideas and technologies. While software 
						engineering problems are often intrinsically fun to tackle, I'm most attracted to solving real customer
						problems with a business justification.
					</Message>
				</div>
			</section>

			<section>
				<Divider horizontal>
					<Header as='h1'>
						<div className="showSkillText">
							<span onClick={() => setShowSkills(!showSkills)}>Web Development Skills</span><br />
						</div>
					</Header>
				</Divider>
				{showSkills && <PortfolioSkills />}
			</section>
		</>
	)
}

const PortfolioSkills = () => {
	const [showResume, setShowResume] = useState(false);
	// const [buttonName, setButtonName] = useState(false);

	return(
		<>
			<Divider hidden />
			<div className="containerBox">
				<section>
					<Grid columns={'equal'} divided stretched>
    					<Grid.Row>
      						<Grid.Column textAlign='center' verticalAlign='middle'>
        						<Fade top><div><Image size="tiny" src={phpSkill} avatar /><span>PHP</span></div></Fade>
      						</Grid.Column>
      						<Grid.Column textAlign='center' verticalAlign='middle'>
        						<Fade top><div><Image size="tiny" src="https://startpage.com/av/proxy-image?piurl=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQgM85xMhIy4r_OTZjro-wzRol-v4a4gTAQ8c2kiJfw9HUmUNE%26s&sp=1607279343T8b2fbbd85fc112a8ff4142359762df8d3b163505dcd5b1d5c9a1a50dd4e8dad8" avatar /><span>Wordpress</span></div></Fade>
      						</Grid.Column>
       						<Grid.Column textAlign='center' verticalAlign='middle'>
        						<Fade top><div><Image size="tiny" src={reactSkill} avatar /><span>React</span></div></Fade>
        					</Grid.Column>
        					<Grid.Column textAlign='center' verticalAlign='middle'>
        						<Fade top><div><Image size="tiny" src={angularSkill} avatar /><span>Angular</span></div></Fade>
      						</Grid.Column>
    					</Grid.Row>

					    <Grid.Row>
					    <Grid.Column textAlign='center' verticalAlign='middle'>
        						<Fade top><div><Image size="tiny" src={firebaseSkill} avatar /><span>Firebase</span></div></Fade>
      						</Grid.Column>
					    	<Grid.Column textAlign='center' verticalAlign='middle'>
					        	<Zoom><div><Image size="tiny" src="data:image/png;base64,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" avatar /><span>Photoshop</span></div></Zoom>
					      	</Grid.Column>
					      	<Grid.Column textAlign='center' verticalAlign='middle'>
					        	<Fade bottom><div><Image size="tiny" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAADfCAMAAADcKv+WAAAA21BMVEX///8jHyANgsoWUZcVS40AAAAHmN1+xeoAre8Se8ohHB4RCgwEldYcFxi+vb329vbT09OYl5jJyckLAAM4p+Ts7OwXEhMVTZSQj5BycHFGQ0Q4NTanpqYAj9Tl5eUZabwXX6sihsUFoeZTUVHv+PxfXV3S4vEhXJ6xsLAxLS7i8foAkNsrdLEAPYeEg4MWbK1dsOCVy+9uv+6SqdSr2PA/mdTh5+8AYrkANYPE6PyNtuBZn9Vwq9oobbVAZpyjxOa61Ox/lbhYeKekt9KPpcbDzuAAUKVwjbhNhrpWncIZAAARXElEQVR4nO2cCVvaytfAE+2AJIQAgciOLGFTKXptb6u19t7a3v/3/0TvTGbJdiYEHKzy5jxPn8YAmflxzpwtEzQtl1xyySWXXHLJJZc3I7Ok/OkpKRb7y3VMvvx7mJFWP56e0r69z79+Pj//989P1d/w6r/rDzG5/qx4DCI/Hk5Kvjz8gF6ePX/HX+75+enVqFwobBRS3pX7ccAP1/+ouz6T6beT0gmX0smP2Mufn+fX56dY5vPyuEDksrFSMzIGLF8lEW01Vxcy/RbwUciHaejlX/9SPgx4enr+sUDlsqhg5FmjXy6Xk4Q/FVw7LE8ngAhLnH2/PhWAWM7nZcbYmKZdNYsUCSCgxA8vvXBUVp9KEGLpyX/1879RQMJ42meKHL+Q0VchpMRfCrgCuYH4sPSHhPGZAYYICWRZBeO0TGWUQPyuCs6XWwnh6KQ0nM3mp/MkIBGGWGjsPzInPLASVw0JIXWscyKE8DQuc4bYv9177MarKHEmJRydnHy6urqiiEnCkF+923PsTV+mxC8KY+7XRl9upt+054+UESDEjCNuq/stx7u+VIkKU7c7KSH1p58J4un87OocYuTLsb/ZZ+xpX7oSv6hL3e4an+SEP8g7/odN9ers7AwkPL/iprqPXW3KMiVe/6eM8GsjxdXQWT9hNTYwYhlUo4gce3jVmVyJ6vLvWQphn6Wf04+jUgkjnn0EGef7exyhxERioy7/XjVSFqJIsL/huqOAERuwGvv7qjFFiV9enBQymTZSlHgj3vZEaiuiRtjjiMDxdcfhX0OJGznhqBhUSdMhU6PE4+ypxhR3eq1KicVGoyxDLIZrpBOuxhGkxiD+7+ZUb/oHV+JdipkWi2GruyeIDbkaefjfLTY25EpUVAljV9MYSQmLYVOZEUs9kauRpziXu9jXiivxY4LwWQ0hWYiyoH9bLN5E3ltKV6OIGzeSsSDhuVsydVOlxBu5mW6wEqPL6oEg9rercReHw+10figlrsbSkEgIYw0ZP2z4DucsPW5kb1ZND67EhlSJnwhhLFNZkcVI4wYYG7nD6WfvVXE7TRIqUuKN1Nf0CWExrg1fi77DAVOcoKbKPIONJGCoUiIxU4mv8QkTyngILPUjhCgcTubQeGglbqRmSgkTGTVdjL6lggUHrzcyWyqz00TAUKVEEvRBJZY2RdBO2WL0LfUMKv9F2ZjVp25kvkaREqW+5lMRtlO2GKmlgnFjvqNPlQQMVUq8kSmxX5TYKV+MBWncEJaaLfrTOupgSpxKlcgIk3bKFyNVIxQ3drRU2uJPEKoqMW4bkgpjU5TaKU1TGSLkcAKfmmmSsoChpsRYyZTIFyJkp5o2DFkq6HD4XZws/Y2ZRImKin2iRCh1G3HCIhjbPgXRH3Q4Ivpnqaj8UhHwNWrablIlCkI4tIUXI5ThCEvNkuA0QDNV1XaTKVEsRMjZaGIxyi2VN40zhI0VeMNUVQNcpkSxEIuSJtO0FLJU0OGMMoeNm/F4nMxrVDXAZUoUhNIJnoQsFayMeUW1PWw0xuNkSDy0EgMzlfq0+1LIUsHQyCuqbW5xWhiPAUJFSizCStxqplh+DEOWCjqcUcZq464AmakiJcoSm+1myrqpwlJTbjZurTY24+QOG2X3E+/gSjiDmWpiMY7luXi2xTgFzVTV/URYieUMZqqJxXh5JsvFeVt8Sw53B5qpIiV+hZWYxUw1sRiZpQK3qXgqviWH20DeVNWd/VtQiQ+ZzFRERtpPBUPjfJxlMRYgwi9qtmdMQSX2BeG2BJotxr40NPJUPHUxfj09oBLBmxil2/TcNCRsMTJLBUIjt9TUyPic2JH5Qd0eG1CJQUjcmluyNJVZKhQa59sX4woiVKXEFbgSM5upxmtGbqlzQI3MUlMMYgQhKlqJpGWTVOIms5lqvIHDLRVwONxS5YtxAwUMZRulICUGdXCWu9hPEZ8KOZz5lsh4cwkRXivaKDWDlJjd1xBZRS0VyHCYpfYlVj+7PGRMJBn4S3yNLycRSwUcDrdUeNvftFA4YGJD7DSpxF18DZH7qKUCtzd4ewOeQgEM+6p2u82A7vBOvsa/SNRSIYczknc3bi8LkJ0q2+12k6bEzDtmShFLBUoqVlFBt8RvLg9ZJ2rETl+uxMBSC3KHIwsbd5cF0E6V7XYDNg4HyWn229fcUk/OZHGDW2rik4QQsFN1G6XukitRBIxd9udFfSqkRupw4rvFVuTkONkdVvi0SXJ/exAwdumy8+jf36bGaNiYUvMFCNU9bZK8T7NrwGBzHWZUYzRsNPxTQANc3dMmq8RzJoESd7vSQ9ThAA0OmuFE+nANmRJV5d9YbhKIgnDH1GK2VY00boSb4o1LnxC4Y6puj/s00Tt92FOJgcMZy1djOWqpjBBwNso2ZULOZo+AweRHRjUKS23wLvkhfc2qECcUUX+PR0hOYqsRSHHKQZNq+shaj4ASFT5Ps0kg7hUwmMTVCBQcH4Wlfr64OKGIh9zFr80K8aX4EiUm1QiY6oh1cH79vri48FuPyfRUoTfVGuN4Br63r/El7lSBLs6c5qk/CeFFH1yJKp8T/lqI56dCibvuyWfyrRTNVJOmSj3Og0948QiuRJUPtjXGY6VK1IKaKt1UHy+Y9KGYqPBJ6LvCuCBR4t4NBWGqrPwH+sbnowshj8nERukD++PxOOptRNdtl53cMXmKL8f4XZz54zBAvEi2bFQS3hTidiqU+JLU4iGdcT4cDh9DatxC2PY6Xq1qksPJYtepkPvqMcQX+poYI3c5IVs9xyr0RRAOI87m+ntyHXqaVu1WNG2g74xYxIgNUIn7PhrL5VtcjyP+ywYMUCiS/B2Oh0C0sDFifTHB+lzsiugrsQAp8aWEOMspxXxOg8THECBjpCcCFUJOzkes1KrNdb234zRuMeE4Ug4/qCIkP1jBjZVDjubDmDwKYp/v+juc0lAt2u3WoLIj4oooMepQ96wvYJnenwwx5nBIIMeXpd+//x4O/xZSehz+/XvIz5xef3+WOVKKqK09bVfEzTiO+KBKhVzIj+Nguf9LyP1f9/f35Fz4DDn310zuwzHYoK4Nqlq1vtPwXy99xBBhiXhSdXXon5firS/fhPzz8+6Y+HLJJZdccskll1xyySWXdyMD1b9mmRhg3V0ud21f7CB2s9kEGPDZJj1qI1Q93PBYesg0HdQ63AAVhJCeONvEZy12pLvtww1PJqCjdm19UERdR4neQcvUjSU9tBA6oBFp2tJAleCvQywKjGhYXuykjQyDIzZrO/dqd5EBsjpi2F73EAZTQUbHQIPoyZ6jd63lAUaDxjfX/LiOHHGs1WvrXlPREFbbja823fU6r4dY48d15HJEu40Xj71WskQqyFl0DWTHzy3/LGJba3U6a61XkXxstyGcXs9xauFzXcvVTANGtAeDWJCxgz+b1Xo8ig6q1Yi52bETGFGoqioQK3WtPdDaFS3uJfYRjFjTsHcJnaojs4VPMcSW54mVate6iIQTz4+U3U5X0xb4DJ3XYK2TF9Ek9M3TU0Fcr0wccsJY00suOpOOYXQnk4nHjpf4uDPQ8BXbVRsf1BQsRx9xbaKQ2/Rc1AwQ244I/QvkuGSKJvLXrmMhrYXjNkXERy6ZvmmhDtPkwHLIKceZ0L+bHeSa5ITl0kBUw5/RdQtfoksyAHpsIh9xPSHj9mKOcG9E7Lm74swAEe8TILocsYYM1OnV65U1RTQNq4qQ1/IIYhu/6FWq1foaGSa72NIyvXq12uvQsNC0XMtZ+ydwuCdLY+G1O5bRaXteW6t43oQee77y2oMq/mbWCgKlj0g4RPinTElEkoYwi7MXFHE50dm33EOGw64w0A3q+yvIZUuJXqDruly/NXytAbtq4G6q4njQ0vBi6FTtIIi8FLEqZoMzNovYVRLRNFA0CTANPk/NdozgO6pihZIl1DLDeQs285CprE02YNSjmjyP6y2w32rWlWQCFFHrWHy2eGJksglEPMOYezMN4eMXwVfkf8Tp+RhO+DvBQwSJoo3VaNPxQUStvq71WhE/v7cwRJFk2CYNiAlEz4qnsmagOc8Nv1in38YCGd1QQIm6bfyJCh0fRtTU5asMEbsG+q32HGqOCUTXQLGPmkHGYEWShyb9MM50LUPosY4iOVTPoWgpiKqEI/bY/5ZFi6g4YhMlcgEzgMYw4VeQ7tAp4+/F7dlsoMj8+Z+viIhnqYdHjCOGKwImpuGwIzvGjxea//9ggiEdy7fIRYhFC1bGayJS/9dh9gogGt3YRwNE/G4z/AoyXHZU9RA24p72JrTYJGqqigUTR7S5ZgIJIVo0TDCJaLzacXXyYj3qkWvM3b4mImEZkH/0r4S7weVIrIcTQsRvCsWHRagG1IhlkBiCjTn8HU1YlHpVRJy4rXUR3hKILTNeVYYQK5GViq09/G0sHJ944pNqfDBm9zFEFdlMXAJEPAc3aOMkEJvYUuPZjUDUcNImFNBjvDyMsFqtjnM8kVRjJS7Y+JF6UUXxFJcQYh3pQYqVTOBqLHfGsvBxwoj4s4ilzCRb91G8mn/CXjIT90zDpN9gc2KaEz5+gNgUmatSCSGS5Sb0BFQauJhwjHav1tZp+RRGJHm46XjrVttyeBrURv4JXF0x8+tg+O66V/OQ6/CEPIyoTVzDbbc6ivu2FYTEEAsUBHDksO6qF7SKa7heNB0stOLAlV/oQvUlLh2JoA7TRJuccEwHiQW2Rg4+Ezm1CI2PV6hp4RcVa7K6bgXZ5TqoDNYtYZRrEQ/smmciw6vROfR60e5RZd0x3c66Hj7h6pNWaMbNmmeYOr+AP36tFspum60uvsKh7zDkkksuueSSy/9jIbdQqThZkoqO5b83Vjra4iIyCcpJz9r23rCY8QnshWgwceONCxjRf28C0dgiIUR323sjn1OCGHzTGe7mvbYWnfgEXoYYaU4cJ6KeoSB974g62npT9pURDeWIhrutjklHNJBUBOIk+ZrDhneBzym5+Rb+1sxtt4JSEY0u2YsFi3gv8Bqbg7sGPv5yQoHIzCe5y2gnxP3mUKUfP0iHUROIFlsikk0MQt4xImLD6E56J/M9Iw7WJjPV1DzuPSNWm3xRps7zPSPWSSuYHqbdfn7fiFqXe9UUT/2eEStiJN2ayN/+nhFJp3/N0gwk34H6jhHpfbGlQacqT5veMSK9d1JnpirfDf7uETURHGUlx/tHtC1mqobk7e8fUZiq7I70ESBqbZeZKnwf8xgQbZOZKlxyHAOiKCAdcMCjQNQ8bqpQyXEciE2HmmpizxuR40DUerzkAFrHR4LIOaCS41gQBzyPS7aO0xGXix4s6Y20P4AYmGoij9vSR3Vg2fKQ559A5CSGEy859uuGv0VEbqqJ1vHxIGotXh3HWsdHhMgbOUbsOeNjQpS0jrcgurC8TcSgkROZ3hbENixe+jaCP4XIGznR1vGxhH4qvDpGQOJzJIhaG7jLcWSIvJETbh0fGaKojkOt42ND5NVxqHV8dIi8kROUHEeHqC3iJcfxIQpT5U83HCFiE1FT5a3jI0QMqmOaxx0joqiOl+G/jguRV8e0dewdI2KwzYHkceyWx5EhcuP0W8dHishNlbSOW+ZRIvJGDtl1XDtSRG1JTRXncUeLyBs5qL5wjhSRN3KM5dtHtAfxRlE2RE3njRzjbSPabfIDjLGnY7Mh8kaOob9pRFsn5Z+BIk38jIiikfO2ET1o31BWRNs1tiLq+kQqnZTdysoQeQSP3uHOihh7oCP6mkC0pGKmPOaiDFHM0TDtxNntiGKbQxqiXNJ+ZFU9ou7shcgbOW8YURhqxCtkRxSNnLeLGOxSCIeNHRC1iTDVt4o4QD4jiiz8Cns2Kcvlm8GjTNEXbPmzUkJS3Q0VBT92M+gmL9SsU8n00x3VOpfYC/XtknKL0d5lDttkUKnnv9GRSy655JJLLrnk8qbl/wBRqjNbqlIj8QAAAABJRU5ErkJggg==" avatar /><span>.NET</span></div></Fade>
					      	</Grid.Column>
					       	<Grid.Column textAlign='center' verticalAlign='middle'>
					        	<Fade right><div><Image size="tiny" src="data:image/png;base64,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" avatar /><span>MySQL</span></div></Fade>
					      	</Grid.Column>
					    </Grid.Row>
  					</Grid>	
				</section>
			</div>

			<section className="buttonSection">
				<div>
					<button className="btn-grad" onClick={() => setShowResume(!showResume)}>Show Resume</button>
				</div>
			</section>

			<section className="resumeSection">
				{showResume && <PortfolioResume />}
			</section>
		</>
	)
}


const PortfolioResume = () => {
	return (
		<>
			<section className="resumeBox">
				<Bounce left>
					<ReactImageMagnify {...{
						smallImage: {
							alt: 'Resume Small',
							src: resumepic,
							width: 400,
							height: 600,
						},
						largeImage: {
							alt: 'Resume Small',
							src: resumepic,
							width: 800,
							height: 1000,
						}
					}} />
				</Bounce>
			</section>
		</>
	)
}

export default Portfolio;
