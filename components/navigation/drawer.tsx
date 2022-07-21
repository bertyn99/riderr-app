import { createDrawerNavigator } from "@react-navigation/drawer";
import HistoryScreen from "../../screens/commons/HistoryScreen";
import HomeScreen from "../../screens/HomeScreen";
import PaymentScreen from "../../screens/user/PaymentScreen";

import { DrawerStackParams } from "./types";

function MyProfileDrawer() {
  const Drawer = createDrawerNavigator<DrawerStackParams>();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="PaymentScreen" component={PaymentScreen} />

      <Drawer.Screen name="HistoryScreen" component={HistoryScreen} />
    </Drawer.Navigator>
  );
}

export default MyProfileDrawer;
