import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <HomeScreen></HomeScreen>
      </SafeAreaProvider>
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
