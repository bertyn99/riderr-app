import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store/index";

import Navigation from "./components/navigation";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation></Navigation>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
