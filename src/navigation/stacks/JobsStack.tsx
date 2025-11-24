import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import JobsListsScreen from "../../screens/jobs/JobsListsScreen";
import JobCreateScreen from "../../screens/jobs/JobCreateScreen";
import JobEditScreen from "../../screens/jobs/JobEditScreen";
import Header from "../../components/Header";

const Stack = createNativeStackNavigator();

export default function JobsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ route }) => <Header title={route.name} />,
      }}
    >
      <Stack.Screen
        name="Lista de Vagas"
        component={JobsListsScreen}
        options={{ title: "Lista de Vagas" }}
      />
      <Stack.Screen
        name="Nova Vaga"
        component={JobCreateScreen}
        options={{ title: "Nova Vaga" }}
      />
      <Stack.Screen
        name="Editar Vaga"
        component={JobEditScreen}
        options={{ title: "Editar Vaga" }}
      />
    </Stack.Navigator>
  );
}
