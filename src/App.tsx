import { Provider } from "react-redux";

import { Welcome } from "./pages/Welcome";
import store from "./store";
import { GlobalStyles } from "./styles/globalStyles";

function App() {
  return (
    <Provider store={store}>
      <Welcome />
      <GlobalStyles />
    </Provider>
  );
}

export default App;
