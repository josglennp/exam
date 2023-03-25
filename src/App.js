import "./App.css";
import { MyComponent } from "./Questions/first/MyComponent";
import TodoContextProvider from "./Questions/second/store";
import TodoList from "./Questions/second/TodoList";
import DataManipulation from "./Questions/third/DataManipulation";

function App() {
  return (
    <div className="App">
      <MyComponent headerText={"Answer: "}>
        <p>
          I changed The component into Functional Component with react hooks.
          also I made the The "My Component" clickable since there are no
          buttons to click to trigger how many clicks are there.
        </p>
      </MyComponent>
      <TodoContextProvider>
        <TodoList />
      </TodoContextProvider>
      <DataManipulation />
    </div>
  );
}

export default App;
