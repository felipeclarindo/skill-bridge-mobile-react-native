import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppTabs from "../tabs/AppTabs";

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Aplicação" component={AppTabs} />
    </Drawer.Navigator>
  );
}
