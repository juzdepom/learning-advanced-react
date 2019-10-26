import React, { Fragment } from 'react';
import './App.css';

const Temp = (props) => {
  return(
    //Fragment allows us to return multiple divs.
    <Fragment>
      <div>
        {
          props.greetings === 'hi'
          //it also allows us to use curly brackets within curly brackets
          ? <Fragment>&lt;div&gt;{props.greetings}&lt;div&gt;</Fragment>
          : props.greetings
        }
      </div>
      <div>Hello</div>
    </Fragment>
  
  )
}

function App() {
  return (
    <div className="App">
      <Temp greetings="hi"/>
    </div>
  );
}

export default App;
