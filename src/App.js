import logo from "./logo.svg";
import "./App.css";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";

function App() {
  return (
    <div className="App">
      {
        /* <FunctionClick/>
            <ClassClick/> */
        // <EventBind/>
        // <ParentComponent />
        // <UserGreeting />
        // <NameList />
        <StyleSheet primary={true} />
      }
    </div>
  );
}

export default App;
