// import logo from './logo.svg';
import dotenv from 'dotenv';
import axios from 'axios';
import { Button, Form, Container, Header, TextArea } from 'semantic-ui-react'
import './App.css';
import React, { useState } from 'react';

dotenv.config();

function App() {

  const [form, setForm] = useState({
    // date could be date applied or date updated if proceeding to upper stages
    date: '',
    // where I found the job add (mail, job site, ...)
    origin: '',
    // spec link if any
    link: '',
    // position name
    position: '',
    // remote, city, ...
    place: '',
    // perm, contract, ranges if apply
    salary: '',
    // recruiter, direct company, ...
    company: '',
    // details
    contact: '',
    // any other relevant info
    notes: '',
  })

  const handleChange = (event) => {
    const {value, name} = event.target;
    setForm({...form, [name]: value});
  }

  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log(form);
    // axios.post(process.env.SHEET, form);
  }

  return (
    <Container fluid className="container">
        <Header as='h2'>JH</Header>
        <Form className="form" onSubmit={submitFormHandler}>
          <Form.Field>
            <label>Date</label>
            <input placeholder='Enter date' type="text" name = "date" value = {form.date} onChange={handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>Origin</label>
            <input placeholder='Where did you find out about this job?' type="text" name = "origin" value = {form.origin} onChange={handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>Link</label>
            <input placeholder='Position link' type="text" name = "link" value = {form.link} onChange={handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>Position</label>
            <input placeholder='Position applied' type="text" name = "position" value = {form.position} onChange={handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>Place</label>
            <input placeholder='Place' type="text" name = "place" value = {form.place} onChange={handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>Salary</label>
            <input placeholder='Salary' type="text" name = "salary" value = {form.salary} onChange={handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>Company</label>
            <input placeholder='Company (direct) or Recruiter' type="text" name = "company" value = {form.company} onChange={handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>Contact</label>
            <input placeholder='Contact' type="text" name = "contact" value = {form.contact} onChange={handleChange}/>
          </Form.Field>
          <Form.TextArea label="Notes" placeholder='Notes' name = "notes" value = {form.notes} onChange={handleChange}/>
          
          <Button color="blue" type='submit'>Submit</Button>
        </Form>
      </Container>
  );
}

export default App;
