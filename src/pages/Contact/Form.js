import React, { Component }from "react";
import { Route, Routes } from "react-router-dom";
import "./styles.module.css";

export default function Form() {
    // state = { 
    //   fullName: "",
    //   email: "",
    // };
  
  //   handleInputChange = event => {
  //     const value = event.target.value;
  //     const name = event.target.name;
  
      // Updating the input's state
      // this.setState({
      //   [fullName]: value
      // });
  
    const handleFormSubmit = event => {
      event.preventDefault();
  
      this.setState({
        fullName: "",
        email: "",
      });
    };
  
  //   createUser = (event) => {
  //     event.preventDefault();
  //     let formData = {
  //         fullName 
  //     }
  //   }
  
      return (
        <div>
          <form className="form">
            <div>
            <input className="input"
              value={this.state.fullName}
              name="fullName"
              type="text"
              placeholder="John Doe"
            />
            </div>
            <div>
            <input className="input"
              value={this.state.email}
              name="email"
              type="email"
              placeholder="johndoe@gmail.com"
            />
            </div>
            <div>
            <textarea className="input"
            placeholder="Message"
            />
            </div>
  
            <div>
            <button onClick={this.handleFormSubmit} className="button">Send</button>
            </div>
  
          </form>
        </div>
      );
    }

  