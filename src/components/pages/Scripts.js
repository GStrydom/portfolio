import React, { useState } from 'react';

import { Divider, Header, Icon } from "semantic-ui-react";

import Wheel from "../Wheel";
import Footer from '../Footer';

import '../../App.css';
import '../css/Scripts.css';


const Scripts =() => {
  return (
  	<>
  		<Head />
		  <Wheel />
  		<Footer />
  	</>
  );
}

const Head = () => {
	return (
    <>
      <div>
    	  <Divider horizontal>
          <Header as='h2'>
            <div>
              <span><Icon name='angle double left' /></span>
              <span>Scripts </span>
              <span><Icon name='angle double right' /></span>
            </div>
          </Header>
        </Divider>
      </div>
    </>
  )
}

export default Scripts;