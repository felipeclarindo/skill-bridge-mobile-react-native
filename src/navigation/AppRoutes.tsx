import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import DashboardScreen from "../screens/home/DashboardScreen";
import JobsListScreen from "../screens/jobs/JobsListsScreen";
import JobCreateScreen from "../screens/jobs/JobCreateScreen";
import JobEditScreen from "../screens/jobs/JobEditScreen";
import AboutScreen from "../screens/home/AboutScreen";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="Dashboard" component={DashboardScreen} />

      <Stack.Screen name="JobsList" component={JobsListScreen} />
      <Stack.Screen name="JobCreate" component={JobCreateScreen} />
      <Stack.Screen name="JobEdit" component={JobEditScreen} />

      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}
