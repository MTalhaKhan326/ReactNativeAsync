import store from "./src/redux/store";
//import Provider
import { Provider } from "react-redux";
import Terastack from "./RootApp";

export default function App() {
  return (
    <Provider store={store}>
      <Terastack />
    </Provider>
  );
}
