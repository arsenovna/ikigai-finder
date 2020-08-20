import React from 'react';
import styled from 'styled-components';
import './App.css';
import FacebookLogin from 'react-facebook-login';
import { Icon } from '@iconify/react';
import letterC from '@iconify/icons-emojione-monotone/letter-c';

function App() {
  const [user, setUser] = React.useState([])

  const componentClicked = (data) => {
    console.log('data', data)
  }

  const responseFacebook = (response) => {
    setUser(response);
  }


  return (
    <Main>
      <MainBody>
        <LogoItem>
          <WideCaps>
            IKIGAI
          </WideCaps>
          <RegCaps>
            FINDER
          </RegCaps>
          <Intro>
            <WideText>
              What if...
            </WideText>
            <RegText>
              you could see Ikigai of anyone in the world?
            </RegText>
            {user.name}
          </Intro>
          <FacebookLogin
            appId="617689302471020"
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook}/>
        </LogoItem>
        
        <LogoImage className="lady"/>
      </MainBody>
      
      <Footer>
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
        <RightSideInfo>
          <RightFooterItem>
            <Icon icon={letterC} style={{color: '#ffffff', fontSize: '15px'}} />
            Participant of !nFactorial
          </RightFooterItem>
        </RightSideInfo>
      </Footer>
    </Main>
    
    
  );
}

export default App;


const LeftSideInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-around;
`
const RightSideInfo = styled.div`
  display: flex
  float: right;
`

const RightFooterItem = styled.div`
  display: flex;
  float: right;
  font-size: 12px;
`

const Footer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: #FEFEFE;
`;
const FooterItem = styled.div`
  font-size: 12px;
`
const WideCaps = styled.div`
  font-size: 144px;
  color: #E49A3D;
  display: flex;
  flex-direction: row;
`

const RegCaps = styled.div`
  font-size: 48px;
  color: #FEFEFE;
  display: flex;
  flex-direction: row;
`
const LogoItem = styled.div`
`

const Main = styled.div`
  margin: 70px 70px 0 70px;
`

const MainBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Intro = styled.div`
  margin: 90px 0 0;
  color: #FEFEFE;
`

const WideText = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 60px;
`

const RegText = styled.div`
  width: 260px;
  left: 0px;
  top: 0px;
`
const LogoImage = styled.div`
`