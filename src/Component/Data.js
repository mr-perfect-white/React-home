import React, {useState} from 'react';
import axios from 'axios';
import './Data.css';
import { Component } from 'react';


 

class User extends Component {
    
  constructor(props){
    super(props)
    this.state={
      users: [] 
    }
  }

   
     

      ClickHandler = () => {
 
        const customer = {
          name:'bharathi',
          age:'44'
        }
        axios.post('https://test-253a5-default-rtdb.firebaseio.com/.json', customer).then((res) => {
          console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
    };
   
    
   gethandler = () =>{
   

    axios.get('https://test-253a5-default-rtdb.firebaseio.com/description.json',).then((res) => {
      console.log(res);
      this.setState({
        users: res.data
      });
     
  })
  .catch(err => {
    console.log(err);
  })
  };
  
  render(){
  
      return(
        
          <div>
          <p >test</p>
          <button onClick={this.ClickHandler}>onclick  </button>
          <button onClick={this.gethandler}>Get Click </button>
            <div> Cell:{this.state.users.cell}, Mouse:{this.state.users.mouse},Laptop {this.state.users.laptop},Keypad {this.state.users.laptop} </div>

          </div>
         
      )
      
  } 
}

export default User;
