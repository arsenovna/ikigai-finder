import React, {useContext}from 'react';
import styled from 'styled-components';
import '../App.css';
import Context from './Context';
import { useHistory } from "react-router-dom";


function Header() {
  const history = useHistory();
  const {user} = useContext(Context);

  function fbLogout() {
    window.FB.logout()
    history.push("/")
    console.log(user)
  }

  return (
    <div>
      <Main>
        <LeftSideInfo>
          <LogoImage className = "smallLogo"/>
        </LeftSideInfo>
        <RightSideInfo>
          <p style = {{color: "black"}}>{user.name}</p>
          <button className = "logout_button" onClick={fbLogout}>Log out</button>
        </RightSideInfo>
      </Main>
    </div>
    
  );
}

export default Header;


const LeftSideInfo = styled.div`
  position: relative;
  font-size: 12px;
`
const RightSideInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  position: relative;
  align-items: flex-end;
`
const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  width: 95%;
  color: #FEFEFE;
  top: 20px;
  left: 2%;
  border-bottom: 0.5px solid black;
`;

const LogoImage = styled.div`
`