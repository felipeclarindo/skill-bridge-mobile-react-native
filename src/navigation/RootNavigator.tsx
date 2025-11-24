import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../contexts/AuthContext";
import AuthRoutes from "./AuthRoutes";
import AppDrawer from "./drawer/AppDrawer";

export default function RootNavigator() {
  const { user, loading } = useAuth();

  if (loading) return null;

  return (
    <NavigationContainer>
      {user ? <AppDrawer /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
