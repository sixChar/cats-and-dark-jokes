import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function JokeTwoPart(props) {
  const joke = props.joke;
  return (
    <div>
      <p>{joke.setup}</p>
      <p>{joke.delivery}</p>
    </div>
  );
}

function JokeSingle(props) {
  const joke = props.joke;
  return (
    <div>
      {joke.joke}
    </div>
  );
}

function JokeLoading(props) {
  return (
    <div>
      Loading...
    </div>
  );
}


function RandomJoke() {

  const [joke,setJoke] = useState(0);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Dark")
                    .then(response => response.json())
                    .then(data => setJoke(data));
  }, []);

  if (joke) {
    if (joke.type=="single") {
      return <JokeSingle joke={joke}/>
    }
    else {
      return <JokeTwoPart joke={joke}/>
    }
  }
  else {
    return <JokeLoading/>;
  }

  return (
    <div>
      {joke.joke}
    </div>
  );

}



function RandomCat(props) {
  // Api returns different images based on image size so randomizing the size
  // randomizes the image
  const imgSize = 192 + Math.floor(Math.random() * 128);
  console.log(imgSize);

  const imgUrl = `http://placekitten.com/${imgSize}/${imgSize}`

  return (
    <div>
      <img
        width='256'
        height='256'
        src={imgUrl}
        style={{
          borderRadius:'40px'
        }}
      />
    </div>
  );

}




function App() {
  return (
    <div className="App">
      <RandomCat/>
      <RandomJoke/>
    </div>
  );
}

export default App;
