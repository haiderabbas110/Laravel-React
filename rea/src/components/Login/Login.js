import React,{Component,useState, useEffect} from "react"
import ReactDOM from "react-dom"
//import './Login.css';
import { withRouter } from "react-router";


function Login(){


      // this.state = {
      //   value: 'Please write an essay about your favorite DOM element.'
      // };
  
      // this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    // handleChange(event) {
    //   this.setState({value: event.target.value});
    // }

    
  
    handleSubmit(event) {
      alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          {/* <label>
            Essay:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label> */}

          <label>
            Email:
          </label>
          <input type="email" name="email" />
          <label>
            Email:
          </label>
          <input type="password" name="password" />
          <input type="submit" value="Submit" />
        </form>
      );
    }
}
 export default Login;