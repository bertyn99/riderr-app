import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { persistor, store } from "./store/index";

import Navigation from "./components/navigation";
import { PersistGate } from "redux-persist/integration/react";
import SplashScreen from "./screens/SplashScreen";
if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<SplashScreen></SplashScreen>}
        persistor={persistor}
      >
        <Navigation></Navigation>
      </PersistGate>
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
