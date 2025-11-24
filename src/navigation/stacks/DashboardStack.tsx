import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../../screens/home/DashboardScreen";
import Header from "../../components/Header";

const Stack = createNativeStackNavigator();

export default function DashboardStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ route, navigation, options }) => (
          <Header title="Dashboard" />
        ),
      }}
    >
      <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
    </Stack.Navigator>
  );
}
