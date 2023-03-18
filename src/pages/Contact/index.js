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
    <div className="m-2 p-10 bg-slate-200">
      <h1
        className="text-center font-serif bg-red-900 min-h-100
      leading-3 text-2xl  text-white py-10 px-20"
      >
        Contact Us
      </h1>
      <Form></Form>
    </div>
  );
}
