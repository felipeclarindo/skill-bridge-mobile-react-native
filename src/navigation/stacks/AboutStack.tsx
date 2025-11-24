import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutScreen from "../../screens/home/AboutScreen";
import Header from "../../components/Header";

const Stack = createNativeStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ route }) => <Header title={route.name} />,
      }}
    >
      <Stack.Screen name="Sobre" component={AboutScreen} />
    </Stack.Navigator>
  );
}
