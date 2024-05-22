import logo from "./logo.svg";
import "./App.css";
import ClassCounter from "./components/useState/ClassCounter";
import HookCounter from "./components/useState/HookCounter";
import HookCounterTwo from "./components/useState/HookCounterTwo";
import HookCounterThree from "./components/useState/HookCounterThree";
import HookCounterFour from "./components/useState/HookCounterFour";
import ClassCounterOne from "./components/useEffect/ClassCounterOne";
import HookCounterOne from "./components/useEffect/HookCounterOne";
import ClassMouse from "./components/useEffect/ClassMouse";
import HookMouse from "./components/useEffect/HookMouse";
import MouseContainer from "./components/useEffect/MouseContainer";
import IntervalClassCounter from "./components/useEffect/IntervalClassCounter";
import IntervalHookCounter from "./components/useEffect/IntervalHookCounter";
import DataFetching from "./components/useEffect/DataFetching";

function App() {
  return (
    <div className="App">
      {/* <ClassCounter />
      <HookCounter /> */}

      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter />
      <IntervalHookCounter /> */}
      <DataFetching />
    </div>
  );
}

export default App;
