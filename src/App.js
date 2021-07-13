import firebase, { addUserToDB } from "./service/firebase.utils";

import Routes from "./Routes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      addUserToDB(user, { dispatch });
    });
    return () => unSubscribe();
  }, [dispatch]);
  return <Routes />;
};

export default App;
