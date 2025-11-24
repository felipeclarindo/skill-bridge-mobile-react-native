// drawer/AppDrawer.js
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppTabs from "../tabs/AppTabs";
import DashboardStack from "../stacks/DashboardStack";
import AboutStack from "../stacks/AboutStack";
import JobsStack from "../stacks/JobsStack";

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={AppTabs} />
      <Drawer.Screen name="Dashboard" component={DashboardStack} />
      <Drawer.Screen name="Jobs" component={JobsStack} />
      <Drawer.Screen name="About" component={AboutStack} />
    </Drawer.Navigator>
  );
}
