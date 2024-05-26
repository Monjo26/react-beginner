// import logo from "./logo.svg";
// import "./App.css";
// import ClassCounter from "./components/useState/ClassCounter";
// import HookCounter from "./components/useState/HookCounter";
// import HookCounterTwo from "./components/useState/HookCounterTwo";
// import HookCounterThree from "./components/useState/HookCounterThree";
// import HookCounterFour from "./components/useState/HookCounterFour";
// import ClassCounterOne from "./components/useEffect/ClassCounterOne";
// import HookCounterOne from "./components/useEffect/HookCounterOne";
// import ClassMouse from "./components/useEffect/ClassMouse";
// import HookMouse from "./components/useEffect/HookMouse";
// import MouseContainer from "./components/useEffect/MouseContainer";
// import IntervalClassCounter from "./components/useEffect/IntervalClassCounter";
// import IntervalHookCounter from "./components/useEffect/IntervalHookCounter";
// import DataFetching from "./components/useEffect/DataFetching";
// import ComponentC from "./components/useContext/ComponentC";
// import React, { useReducer } from "react";
// import CounterOne from "./components/useReducer/CounterOne";
// import CounterTwo from "./components/useReducer/CounterTwo";
// import CounterThree from "./components/useReducer/CounterThree";
// import ComponentA from "./components/useReducer/ComponentA";
// import ComponentB from "./components/useReducer/ComponentB";

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

// export const CountContext = React.createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

// function App() {
//   const [count, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div className="App">
//       {/* <ClassCounter />
//       <HookCounter /> */}
//       {/* <HookCounterTwo /> */}
//       {/* <HookCounterThree /> */}
//       {/* <HookCounterFour /> */}
//       {/* <ClassCounterOne /> */}
//       {/* <HookCounterOne /> */}
//       {/* <ClassMouse /> */}
//       {/* <HookMouse /> */}
//       {/* <MouseContainer /> */}
//       {/* <IntervalClassCounter />
//       <IntervalHookCounter /> */}
//       {/* <DataFetching /> */}
//       {/* <UserContext.Provider value={"You"}>
//         <ChannelContext.Provider value={"codevolation"}>
//           <ComponentC />
//         </ChannelContext.Provider>
//       </UserContext.Provider> */}
//       {/* <CounterOne /> */}
//       {/* <CounterTwo /> */}
//       {/* <CounterThree /> */}
//       <CountContext.Provider
//         value={{ countState: count, countDispatch: dispatch }}
//       >
//         Count-{count}
//         <ComponentA />
//         <ComponentB />
//         <ComponentC />
//       </CountContext.Provider>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import DataFetchingOne from "./components/useReducer/DataFetchingOne";

function App() {
  return (
    <div className="App">
      <DataFetchingOne />
    </div>
  );
}

export default App;
