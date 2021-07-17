import * as Yup from "yup";

import { Button, Card, Container, Nav, Navbar, Spinner } from "react-bootstrap";
import { CustomForm, Input } from "../components/form";
import React, { useEffect } from "react";
import {
  deleteTask,
  fetchTask,
  isTasksLoading,
  tasksSelector,
  updateTask,
} from "../store/tasks";
import { logout, userSelector } from "../store/user";
import { useDispatch, useSelector } from "react-redux";

import { MainStyled } from "./styles";
import { TiTickOutline } from "react-icons/ti";
import { useHistory } from "react-router-dom";

const initialValues = {
  task: "",
};

const validationSchema = Yup.object().shape({
  task: Yup.string().required().label("New Task"),
});

const Main = () => {
  const user = useSelector(userSelector);
  const isLoading = useSelector(isTasksLoading);
  const tasks = useSelector(tasksSelector);
  const dispatch = useDispatch();
  const history = useHistory();
  const { uid } = user;

  useEffect(() => {
    dispatch(fetchTask(uid));
  }, [dispatch, uid]);

  const handleSubmit = async (data, { resetForm }) => {
    dispatch(updateTask(uid, { createdAt: Date.now, ...data }));
    resetForm();
  };

  const handleLogout = () => {
    dispatch(logout());
    history.replace("/login");
  };

  const handleTaskRemoval = (taskId) => {
    dispatch(deleteTask(uid, taskId));
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
              <Input name="task" placeholder="New Task" />
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
              <TiTickOutline size={20} onClick={() => handleTaskRemoval(key)} />
            </span>
          </div>
        ))}
        {isLoading && (
          <div className="spinner-wrapper mt-4">
            <Spinner className="d-block" animation="border" />
          </div>
        )}
        {!isLoading && tasks.length === 0 && (
          <div className="initial-content mt-4 text-danger">No tasks added</div>
        )}
      </MainStyled>
    </>
  );
};

export default Main;
