import Tasks from "./components/Tasks";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Tasks />
      </div>
    </Provider>
  );
}

export default App;
