import React from 'react';
import styled from 'styled-components';
import '../App.css';
import { Icon } from '@iconify/react';
import letterC from '@iconify/icons-emojione-monotone/letter-c';


function Footer() {



  return (
    <div>
      <Main>
        <LeftSideInfo>
          <FooterItem>
            About
          </FooterItem>
          <FooterItem>
            Contacts
          </FooterItem>
          <FooterItem>
            Help
          </FooterItem>
          <FooterItem>
            Privacy
          </FooterItem>
        </LeftSideInfo>

        <MiddleSideInfo/>
        
        <RightSideInfo>
          <RightFooterItem>
            <Icon icon={letterC} style={{color: 'black', fontSize: '15px'}} />
            Participant of !nFactorial
          </RightFooterItem>
        </RightSideInfo>
      </Main>
    </div>
    
  );
}

export default Footer;


const LeftSideInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-around;
`
const RightSideInfo = styled.div`
`

const RightFooterItem = styled.div`
  display: flex;
  font-size: 12px;
  position: relative;
  float: right;
  top: 50%;
  right: 10%;
`

const Main = styled.div`
  height:100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: black;
`;
const FooterItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`
const MiddleSideInfo = styled.div`
`