import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import Button from "../../components/Button";

export default function ProfileScreen() {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Perfil</Text>

      <Text style={styles.label}>Nome:</Text>
      <Text style={styles.value}>{user?.name}</Text>

      <Text style={styles.label}>Email:</Text>
      <Text style={styles.value}>{user?.email}</Text>

      <Button title="Sair" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 60 },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 20 },
  label: { fontWeight: "bold", marginTop: 20 },
  value: { fontSize: 16 },
});
