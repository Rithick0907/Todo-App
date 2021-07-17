import * as Yup from "yup";

import { Button, Card, Container, Nav, Navbar } from "react-bootstrap";
import { CustomForm, Input } from "../components/form";
import React, { useEffect } from "react";
import { fetchTask, tasksSelector } from "../store/tasks";
import { logout, userSelector } from "../store/user";
import { useDispatch, useSelector } from "react-redux";

import { MainStyled } from "./styles";
import { TiTickOutline } from "react-icons/ti";
import { useHistory } from "react-router-dom";

const initialValues = {
  addTask: "",
};

const validationSchema = Yup.object().shape({
  addTask: Yup.string().required().label("New Task"),
});

const Main = () => {
  const user = useSelector(userSelector);
  const tasks = useSelector(tasksSelector);
  const dispatch = useDispatch();
  const history = useHistory();
  const { uid } = user;

  useEffect(() => {
    dispatch(fetchTask(uid));
  }, [dispatch, uid]);

  const handleSubmit = (data, { resetForm }) => {
    resetForm();
  };

  const handleLogout = () => {
    dispatch(logout());
    history.replace("/login");
  };

  const handleTaskRemoval = (params) => {
    console.log("clicked");
  };

  return (
    <>
      <Navbar style={{ backgroundColor: "lightgray" }} expand="sm">
        <Container>
          <Navbar.Brand href="/login">Todo List Manager</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Button onClick={handleLogout} className="btn-danger">
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <MainStyled>
        <Card>
          <Card.Header>Add Task</Card.Header>
          <Card.Body>
            <CustomForm
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Input name="addTask" placeholder="New Task" />
              <div className="text-right mt-4">
                <Button variant="outline-success" type="submit">
                  Add Task
                </Button>
              </div>
            </CustomForm>
          </Card.Body>
        </Card>
        {tasks.map(({ task, key }) => (
          <div
            key={key}
            className="answer-list p-2 mt-4 justify-content-between"
          >
            {task}
            <span>
              <TiTickOutline size={20} onClick={handleTaskRemoval} />
            </span>
          </div>
        ))}
      </MainStyled>
    </>
  );
};

export default Main;
