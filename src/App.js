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
import ParentComp1 from "./components/ParentComp1";
import ParentComp2 from "./components/ParentComp2";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

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
      {/* <ParentComp /> */}
      {/* <ParentComp1 /> */}
      {/* <ParentComp2 /> */}
      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}
      {/* <FRParentInput /> */}
      {/* <PortalDemo /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}

      <ClickCounter name="You" />
      <HoverCounter />
    </div>
  );
}

export default App;
