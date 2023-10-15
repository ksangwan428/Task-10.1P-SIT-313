
import React, {Component} from 'react'
import {Form, Button} from 'semantic-ui-react'

import db from "./firebase"
import { addDoc, collection } from 'firebase/firestore'

export default class Question extends Component {

  constructor() {
    super();
    this.state = {
      title: "",
      problem: "",
      tags: ""
    };
  }


  CreateNewQuestion  = async () => {
    var date = new Date()
    const collectionRef = collection(db, 'Questions');
    const payload = {   title: this.state.title,
    problem: this.state.problem,
    tags: this.state.tags,
    creationDate: `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
  }

  await addDoc(collectionRef, payload);

  this.setState({
    title: "",
    problem: "",
    tags: ""
  });

  console.log('Successfully Added Question');

}

updateInput = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
}


  render(){

    return (

        <Form className="SelectedForm">
        <div className="formField">
        <h4 style={{marginRight: "10px"}}>Title</h4>
        <input value={this.state.title} name="title"  onChange={this.updateInput} placeholder='Enter a descriptive title' />
        </div>
      <Form.Field style={{marginTop: "10px"}}>
        <h4 style={{marginBottom: "10px"}}>Describe your problem</h4>
        <textarea value={this.state.problem} name="problem"  onChange={this.updateInput}  placeholder='' />
      </Form.Field>
      <div className="formField">
          <h4 style={{marginBottom: "10px", marginRight: "10px", marginTop: "10px"}}>Tags</h4>
          <input value={this.state.tags} name="tags"  onChange={this.updateInput}  placeholder='Please add up to 3 tags to descript what your article is about e.g., Java' />
        </div>
      <Button style={{marginTop: "20px", float:"right", width: "170px"}} onClick={this.CreateNewQuestion}>Post</Button>
    </Form>


    )
   
}
}
