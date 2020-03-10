import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ContactSection";
import Form from "../Form/Form";

const ContactSection = () => {
  return (
    <section className="contactUs">
      <h2>Contact Us</h2>
      <Form />
    </section>
  );
};

export default ContactSection;
