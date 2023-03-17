import React, { useRef } from "react";
import { useFormik } from 'formik';
import { userSchema } from "./index.js";
import emailjs from '@emailjs/browser';

const styles = {
  padding: "20px",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "10px",
  width: "500px",
  display: "block",
  textAlign: "center",
  borderRadius: "10px",
}

export default function Form() {
  const form = useRef();
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        actions.resetForm();
        emailjs.sendForm('service_akrgx8y', 'template_syxaei4', form.current, 'M833K9wmZzpLxa8Za')
          .then((result) => {
            console.log(result.text);
            alert("Thank you! Message received");
          }, (error) => {
            console.log(error.text);
          });
        resolve();
      }, 1000);
    });
  };
  const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit}= useFormik({
    initialValues: { //this is the default state
      fullName: "",
      email: "",
      message: "",
    },
    validationSchema: userSchema,
    onSubmit,
  }) 
    return (
      <div>
        <form ref={form} onSubmit={handleSubmit}>
          <div className="text-center p-10 font-serif text-base">
            <input
              style={styles}
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              name="fullName"
              type="text"
              placeholder="John Doe"
              className={errors.fullName && touched.fullName ? "input-error" : ""}
            />
            {errors.fullName && touched.fullName && <p className="error">{errors.fullName}</p>}

            <input
              style={styles}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              type="email"
              placeholder="johndoe@gmail.com"
              className={errors.email && touched.email ? "input-error" : ""}
            />
            {errors.email && touched.email && <p className="error">{errors.email}</p>}
            
            <textarea
              style={styles}
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              name="message"
              type="text"
              placeholder="Message"
              className={errors.message && touched.message ? "input-error" : ""}
            />
            {errors.message && touched.message && <p className="error">{errors.message}</p>}

            <button disabled={isSubmitting} className="mt-5 text-white bg-red-900 rounded-lg px-8 py-3">Send</button>
          </div>

        </form>
      </div>
    );
  }