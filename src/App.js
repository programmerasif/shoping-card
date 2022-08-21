import Shopping from "./pages/Shopping";
import Header from "./components/Header";

import store from "./Redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Shopping />
      </Provider>
    </div>
  );
}

export default App;
