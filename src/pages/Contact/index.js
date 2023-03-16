import React, { Component }from "react";
import { Route, Routes } from "react-router-dom";
//import * as yup from 'yup';
//import emailjs from '@emailjs/browser';
import styles from "./styles.module.css";
import Form from "./Form.js"

export default function Contact() {
    // let userSchema = yup.object().shape({
    //     fullName: yup.string().required("Name cannot be left blank."),
    //     email: yup.string().email().required("Please enter a valid email."),
    //     message:yup.string().max(500).required("This field is required."),
    //   });
  return (
    <div className={styles.card}>
      <h1 className={styles.heading}>Contact Us</h1>
      <Form></Form>
    </div>
  );
}


