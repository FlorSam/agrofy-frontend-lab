import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

const Form = () => {
return (
    <form method="GET" className="contact">

    <input type="text" id="box" placeholder="Name"/>
    <input type="email" id="box" placeholder="Email" required/>
    <input type="text" id="box" placeholder="Subject"/>
    <input type="text" id="box" placeholder="Message"/>
    <input type="submit" id="send" value="Send"/>

</form>
);
}

export default Form;