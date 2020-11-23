import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';
const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <HeroContainer>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <HeroContent>
          <HeroItems>
            <HeroH1>Rent a Bike online Today</HeroH1>
            <HeroP> Enjoy the  Best Deals, Rates and Delivered Bike on your doorstep</HeroP>
            <HeroBtn>Book online now</HeroBtn>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    );
  };
export default Hero
