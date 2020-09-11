import React, {useState, useContext} from "react";
import "../App.css";
import styled from 'styled-components';
import Header from './Header';
import {TextField, Chip} from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';
import Footer from "./Footer";
import firebase from "../firebase/config";
import Context from './Context';


function Homepage() {
  const [goodItems, setGoodItems] = useState([]);
  const [loveItems, setLoveItems] = useState([]);
  const classes = [];
  const {user} = useContext(Context);
  var db = firebase.firestore();

  const addLoveItems = (event, values)=> {
    setLoveItems(values)
    if (loveItems.length > 0 )
    {
      classes.push('stop')
    }
  }
  const addGoodItems = (event, values)=> {
    setGoodItems(values)
    if (goodItems.length > 0 )
    {
      classes.push('stop')
    }
  }

  const save = () => {
    if((goodItems && goodItems.length === 0) && (loveItems.length === 0)) {
      
      alert(`Ooops :( ${user.name}, It seems like you have not entered you great answers yet`)
      
    }
    else if (goodItems && goodItems.length === 0){
      alert(`Oh noo :( Is that an empty GOODs 💅🛠 field, ${user.name}?`)

    } else if (loveItems && loveItems.length === 0) {
      alert(`Ooh Wee, ${user.name}! Is that an empty LOVEs 💟 field? `)
    } else {
      firebaseResponse()
      alert(`Great job, ${user.name}! We have submitted your awesome answers!`)
    }

  }

  function firebaseResponse() {
    db
      .collection("answers")
      .doc(user.id)
      .set({
        goodItems,
        loveItems,
        user: user
      })
  }

  return (
    <div style={{backgroundColor: "#F4EDE0"}}>
      <Main>
        <Header/>
        <HomeBody>
          <LeftSideContent>
            <Intro>
              <span>
                <h2>Let’s start your journey</h2>
                Tell us some details about you.
              </span>
            </Intro>
              <QuestionsBox>
                <ProgressBar>
                  <ul className="progress-bar">
                    <li className= {classes.join(' ')}/>
                    <li className= {classes.join(' ')}/>
                  </ul>
                </ProgressBar>
                <QuestionContent>
                  <ul className="home-questions">
                    <li>
                      <p>What do you LOVE?</p>
                      <Autocomplete
                        multiple
                        id="loveItems"
                        options={skills.map((option) => option.title)}
                        freeSolo
                        renderTags={(value, getTagProps) =>
                          value.map((option, index) => (
                            <Chip color="primary" label={option} {...getTagProps({ index })} />
                          ))
                        }
                        onChange={addLoveItems}
                        renderInput={(params) => (
                          <TextField {...params} />
                        )}
                      />
                    </li>
                    <li>
                      <p>What are you GOOD AT?</p>
                      <Autocomplete
                        multiple
                        id="goodItems"
                        options={skills.map((option) => option.title)}
                        freeSolo
                        renderTags={(value, getTagProps) =>
                          value.map((option, index) => (
                            <Chip color="primary" label={option} {...getTagProps({ index })} />
                          ))
                        }
                        onChange={addGoodItems}
                        renderInput={(params) => (
                          <TextField {...params}  />
                        )}
                      />
                    </li>
                  </ul>
                </QuestionContent>
              </QuestionsBox>
              <SaveButtonBox>
                <button className = "logout_button" onClick={save}>Save</button>
              </SaveButtonBox>
          </LeftSideContent>
          <RightSideContent>
            <p>
            "Become the change"
            </p>
          </RightSideContent>
        </HomeBody>
        <FooterDiv>
          <Footer/>
        </FooterDiv>
      </Main>
    </div>
  );
}

export default Homepage;

const Main = styled.div`
  height: 100vh;
`

const HomeBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  width: 90%;
  top: 5%;
  right: 5%;
  left:5%;
`

const Intro = styled.div``

const LeftSideContent = styled.div`

`

const QuestionsBox = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1.7fr;
`

const ProgressBar = styled.div`
`

const QuestionContent = styled.div`
  display: flex;
  flex-direction: column;
  list-
`

const FooterDiv = styled.div` 
  position: relative;
  height: 60px;
  color: black;
`

const SaveButtonBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  font-size: 12px;
  position: relative;
  align-items: flex-end;
`

const RightSideContent = styled.div`
  p {
    position: relative;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 300;
    font-size: 64px;
    margin: 20% 5% 20% 20%;
  }
`

const skills = [
  { title: 'Analytics' },
  { title: 'Design' },
  { title: 'Web Development' },
  { title: 'Data Science' },
  { title: 'iOS Development' },
  { title: 'Teaching' },
];
