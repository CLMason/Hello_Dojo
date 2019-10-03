import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  render (){
    //creating a variable "items"
    let items = ["Learn React", "Climb Mt.Everest", "Run a marathon","Feed the dogs"];
    return( //can only return one element so need to place things in one tag...ie "div"
      <div>
        <h1>Hello Dojo!</h1>
        <h3>Things I needd to do:</h3>
        <ul>
          {     
          //using javascript -> "map" does the same thing to each one 
          //The map() method calls the provided function once for each element in an array, in order.
          // using the loop index
          // map is setup so if we ask for two variables the second it gives is going to be the index like 0,1,2,3,4...
            items.map ( (item, index) => 
            <li key = {index}>{item}</li>)
          }
        </ul>
      </div>
    )
  }
    
}

export default App;
