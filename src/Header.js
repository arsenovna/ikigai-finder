import React, {useContext}from 'react';
import styled from 'styled-components';
import './App.css';
import Context from './Context';


function Header() {

  const {user} = useContext(Context);

  return (
    <div>
      <Main>
        <LeftSideInfo>
          <LogoImage className = "smallLogo"/>
        </LeftSideInfo>
        <RightSideInfo>
          <p style = {{color: "black"}}>{user.name}</p>
          <button className = "logout_button" disabled>Log out</button>
        </RightSideInfo>
      </Main>
    </div>
    
  );
}

export default Header;


const LeftSideInfo = styled.div`
  font-size: 12px;
  
`
const RightSideInfo = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  font-size: 12px;
  position: relative;
  align-items: flex-end;
  right: 5%;
`
const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  height:30%;
  width: 90%;
  color: #FEFEFE;
  top: 20px;
  left: 5%;
  right: 5%;
  border-bottom: 0.5px solid black;
`;
const LogoImage = styled.div`
`