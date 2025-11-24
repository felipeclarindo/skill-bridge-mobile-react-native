import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../components/Button";
import { useAuth } from "../../contexts/AuthContext";

export default function HomeScreen({ navigation }: any) {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo, {user?.name}!</Text>

      <Button
        title="Dashboard"
        onPress={() => navigation.navigate("Dashboard")}
      />
      <Button title="Vagas" onPress={() => navigation.navigate("JobsList")} />
      <Button
        title="Sobre o App"
        onPress={() => navigation.navigate("About")}
      />

      <Button title="Sair" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 80 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
});
