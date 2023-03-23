import React from "react";

import * as yup from "yup";
import Form from "./Form.js";

export const userSchema = yup.object().shape({
  fullName: yup.string().required("Name cannot be left blank."),
  email: yup
    .string()
    .email("Please enter a valid email.")
    .required("Please enter a valid email."),
  message: yup.string().min(10).max(500).required("This field is required."),
});

export default function Contact() {
  return (
  
    <div className="p-10 bg-amber-400 min-h-screen">

      <h1
        className="text-center tracking-tight rounded-md font-bold leading-3 text-xl text-indigo-900 py-10 px-20 sm:text-5xl"
      >
        Contact Us
      </h1>
      <Form></Form>
    </div>
    
  );
};

