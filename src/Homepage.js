import React from "react";
import "./App.css";
import styled from 'styled-components';
import Header from './Header';
import {TextField, Chip} from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';
import Footer from "./Footer";


function Homepage() {

  return (
    <div style={{backgroundColor: "#F4EDE0"}}>
      <Main>
        <Header/>
        <HomeBody>
          <LeftSideContent>
            <Intro>
              <p>
                <h2>Let’s start your journey</h2>
                Tell us some details about you.
              </p>
            </Intro>
            <QuestionsBox>
              <ProgressBar>
                <ul class="progress-bar">
                  <li class= "stop"/>
                  <li/>
                </ul>
              </ProgressBar>
              <QuestionContent>
                <ul className="home-questions">
                  <li>
                    <p>What do you LOVE?</p>
                    <Autocomplete
                      multiple
                      id="love"
                      options={skills.map((option) => option.title)}
                      freeSolo
                      renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                          <Chip color="#2A153A" label={option} {...getTagProps({ index })} />
                        ))
                      }
                      renderInput={(params) => (
                        <TextField {...params}  />
                      )}
                    />
                  </li>
                  <li>
                    <p>What are you GOOD AT?</p>
                    <Autocomplete
                      multiple
                      id="good"
                      options={skills.map((option) => option.title)}
                      freeSolo
                      renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                          <Chip color="#2A153A" label={option} {...getTagProps({ index })} />
                        ))
                      }
                      renderInput={(params) => (
                        <TextField {...params}  />
                      )}
                    />
                  </li>
                </ul>
              </QuestionContent>
            </QuestionsBox>
          </LeftSideContent>
          <RightSideContent>
            <p>
            "Some quotes about honesty and aims"
            </p>
          </RightSideContent>
        </HomeBody>
        <Footer/>
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
  { title: 'iOS Developer' },
  { title: 'Teacher' },
];
