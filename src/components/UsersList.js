import React, {useState, useContext, useEffect} from "react";
import "../App.css";
import styled from 'styled-components';
import firebase from "../firebase/config";
import Context from './Context';


function Homepage() {
  const [users, setUsers] = useState([]);
  const {user} = useContext(Context);
  var db = firebase.firestore();


  useEffect(() => {
    const unsubscribe = 
    db
    .collection("users")
    .onSnapshot((snapshot) => {
      // debugger
      const newUsers = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
      }))
      setUsers(newUsers)
    })
    return () => unsubscribe()
    
  },[db])

  return (
    <div>
      <Main>
        <ul>
          <h2> BROWSE SOME IKIGAIS</h2>
          {users.map((usr) =>
            
            <li key={usr.id}>
              {/* {(usr.name.name === user.name) &&
                // <img alt={usr.name.name} src={usr.name.picture.data.url}/>
                <h3>ME</h3> }
              {(usr.name.name !== user.name) && */}
                <img alt={usr.name.name} src={usr.name.picture.data.url}/>
                {usr.name.name}
              
              
            </li>
          )}
        </ul>
      </Main>
    </div>
  );
}

export default Homepage;

const Main = styled.div`
  height: fit-content;
  img {
    width=20;
    height=20;
    border-radius: 50px;
  }

  li {
    position: relative;
    display: grid;
    grid-template-columns: 0.2fr 0.8fr;
  }
`

