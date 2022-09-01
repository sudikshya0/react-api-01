import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const New=(props)=>{
    const[user,setUsers] = useState("");
    console.log(user)
    return(
    <div>
        <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User</Form.Label>
          <Form.Control type="text" placeholder="Enter user" 
           onChange={(data)=>{
            setUsers(data.target.value);
          }} />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
      </Form>
      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => props.AddUser(user)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
}
export default New