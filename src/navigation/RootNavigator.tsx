import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../contexts/AuthContext";
import AuthRoutes from "./AuthRoutes";
import AppDrawer from "./drawer/AppDrawer";
import AppTabs from "./tabs/AppTabs"; // import opcional caso queira usar direto as tabs

export default function RootNavigator() {
  const { user, loading } = useAuth();

  if (loading) return null;

  return (
    <NavigationContainer>
      {user ? (
        // Aqui você decide se o Drawer será a navegação principal
        <AppDrawer />
      ) : (
        <AuthRoutes />
      )}
    </NavigationContainer>
  );
}
