import React from 'react'
import{SidebarContainer,Icon,CloseIcon,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute} from './SidebarElements';
const Sidebar = ({ isOpen, toggle }) => {
    return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarMenu>
          <SidebarLink to='/'>Rental Bike</SidebarLink>
          <SidebarLink to='/'>Special Offers</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/'>Rent Now</SidebarRoute>
        </SideBtnWrap>
      </SidebarContainer>
    );
  };
  
  
export default Sidebar
