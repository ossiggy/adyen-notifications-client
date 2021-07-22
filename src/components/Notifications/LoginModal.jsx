import React, { useState } from "react";
import { 
  Button,
  Form,
  Input,
  Modal, 
  ModalBody,
  ModalHeader,
  Label,
} from "reactstrap";
import { API_BASE_URL } from "../../config";

const LoginModal = ({ toggle, modal, setUser }) => {
  const [login, setLogin] = useState({});
  const [error, setError] = useState(null);

  const handleLoginChange = (e, name) => {
    setLogin(prevState => ({
      ...prevState,
      [name]: e.target.value
    }))
  };

  const submitLogin = async e => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(login)
      });
      const auth = await response.json();
      localStorage.setItem('user', JSON.stringify(auth));
      setUser(auth);
      toggle();
    } catch (err) {
      console.error('status', err.statusCode);
      setError('There was a problem logging you in.')
    };
  };

  let errorMessage;

  if (error) {
    errorMessage = (
      <div id="error-message">{error}</div>
    )
  };
  
  return (
    <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader toggle={toggle}>Reporting Login</ModalHeader>
    <ModalBody>
      {errorMessage}
      <Form>
        <Label for="username">Username</Label>
        <Input className="login-input" name="username" value={login.username} onChange={e => handleLoginChange(e, 'username')}/>
        <Label for="password">Password</Label>
        <Input className="login-input" name="password" type="password" value={login.password} onChange={e => handleLoginChange(e, 'password')}/>
        <br/>
        <Button color="success" type="submit" onClick={e => submitLogin(e)}>Login</Button>
      </Form>
    </ModalBody>
    </Modal>
  )
};

export default LoginModal;