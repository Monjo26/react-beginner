import logo from "./logo.svg";
import "./App.css";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";
import Inline from "./components/Inline";

import "./appStyles.css";
import styles from "./appStyles.module.css";

import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import Tables from "./components/Tables";
import ParentComp from "./components/ParentComp";

function App() {
  return (
    <div className="App">
      {/* // <FunctionClick />
      // <ClassClick />
      // <EventBind />
      // <ParentComponent />
      // <UserGreeting />
      // <NameList />
      // <StyleSheet primary={true} />
      // <Inline /> */}
      {/* <Inline />
      <h1 className="error">Error</h1>
      <h1 className={styles}>Success</h1> */}
      {/* <Form /> */}
      {/* <LifeCycleA /> */}
      {/* <FragmentDemo /> */}
      {/* <Tables /> */}
      <ParentComp />
    </div>
  );
}

export default App;
