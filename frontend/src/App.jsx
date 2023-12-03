import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])
  function getJoke(){
    axios.get("/api/jokes").then((response)=>{
      setJokes(response.data);
    }).catch((error)=>{
      console.log("error:",error);
    });
  }

  useEffect(()=>{
    getJoke();
  },[]);
  return (
    <>
      <div>
        <h1>Jokes</h1>
        {
          jokes?.map((joke)=>{
            return(
              <div key={joke?.id}>
                <h3>{joke?.title}</h3>
                <p>{joke?.content}</p>
              </div>
            );
          })

        }
      </div>
    </>
  )
}

export default App
