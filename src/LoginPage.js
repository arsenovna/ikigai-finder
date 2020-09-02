import React from 'react';
import styled from 'styled-components';
import './App.css';
import FacebookLogin from 'react-facebook-login';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import bxlFacebook from '@iconify/icons-bx/bxl-facebook';
import Footer from './Footer'


function LoginPage({fetchedUser}) {
  const [user, setUser] = React.useState([])

  const componentClicked = (data) => {
    console.log('data', data)
  }

  const responseFacebook = (response) => {
    setUser(response);
    fetchedUser(user);
  }


  return (
    <div style={{backgroundColor: "#2A153A"}} >
      <Main>
        <MainBody>
          <LogoItem>
            <AppName> 
              <p1>
                IKIGAI
              </p1>
              <p2>
                FINDER
              </p2>
            </AppName>
            <Intro>
              <p1>
                What if...
              </p1>
              <p2>
                you could see Ikigai of anyone in the world?
              </p2>
            </Intro>
            <Link to = {"/home"}>
              <FacebookLogin
                appId="617689302471020"
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook}
                cssClass = "fb_button"
                // icon={<i icon="bxlFacebook" style={{color: '#fefefe'}}/>}
                textButton="Sign In with Facebook"
                >
                  <Icon icon={bxlFacebook} style={{color: '#fefefe'}} />
              </FacebookLogin>
            </Link>
            
          </LogoItem>

          <LogoImage className="lady"/>
        </MainBody>
        <FooterDiv>
          <Footer/>
        </FooterDiv>
      </Main>
    </div>
    
  );
}

export default LoginPage;


const LogoItem = styled.div`
  display: grid;
  max-width: fit-content;
`

const Main = styled.div`
  height: 100vh;
`

const MainBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  top: 5%;
  right: 5%;
  left:5%;
`

const Intro = styled.div`
  color: #FEFEFE;
  display: grid;
  grid-template-rows: 1fr 1fr;
  
  p1 {
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 60px;
    position: relative;
    top: 30%;
  }
  p2{
    width: 260px;
    left: 0px;
    top: 0px;
  }
`
const AppName = styled.div`
  p1{
    font-size: 144px;
    color: #E49A3D;
    display: flex;
    flex-direction: row;
  }

  p2{
    font-size: 48px;
    color: #FEFEFE;
    display: flex;
    flex-direction: row;
  }
`
const FooterDiv = styled.div` 
  position: relative;
  height: 60px
`

const LogoImage = styled.div`
`