import { Provider } from "react-redux";
import Tasks from "./components/Tasks/Tasks";
import store from "./store";
import ErrorBoundary from "./components/error/ErrorBoundary";

function App() {
  const Fallback = ({ error, errorInfo }) => {
    return (
      <h1>
        Something went wrong!!! <br></br>
        <br></br>
        <p>{error.message}</p>
      </h1>
    );
  };

  return (
    <Provider store={store}>
      <div className="container">
        <ErrorBoundary FallbackComponent={Fallback}>
          <Tasks />
        </ErrorBoundary>
      </div>
    </Provider>
  );
}

export default App;
