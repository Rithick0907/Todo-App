import { Button, Nav, Navbar } from "react-bootstrap";

import { logout } from "../store/user";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Main = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    history.replace("/login");
  };

  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand href="/login">Todo List Manager</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Button onClick={handleLogout} className="btn-danger">
            Logout
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Main;
