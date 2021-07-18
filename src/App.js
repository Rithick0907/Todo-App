import { CSSTransition, TransitionGroup } from "react-transition-group";

import Routes from "./Routes";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="page" timeout={1000}>
        <Routes />
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
